import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { UserService } from 'src/app/api/services/user.service';
import { LoginService } from 'src/app/api/services/login.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  errorMsg: any;
  isPasswordVisible = false;
  passwordType = "password";
  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private userService: UserService,
    private loginService: LoginService,
    private notificationService: NotificationService) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['task/dashboard']);
    }
  }

  get f() { return this.loginForm.controls; }

  submitForm = () => {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let formData = this.loginForm.value;
    console.log(formData);
    
    this.loginService.login(formData).subscribe(data => {
      console.log(data);
      
      if (data && data.token) {
        localStorage.setItem('access_token', data.token);
        if ('admin' !== data.role) {
          // localStorage.setItem('permissions', JSON.stringify(data.permissions));
          localStorage.setItem('role', 'admin');
        } else {
          localStorage.setItem('role', 'admin');
        }
        this.sharedService.setLoggedInUserData(data);
        this.router.navigate(['task/dashboard']);
      } else {
        this.notificationService.error('Something went wrong');
      }
    })

  }


  showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordType = this.isPasswordVisible ? 'text' : 'password';
  }
}
