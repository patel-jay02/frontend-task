import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/services/user.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  _id: string = '';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,

  ) {

    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],

    });
   }
  get controls() { return this.myForm.controls; }


  ngOnInit(): void {
// 
  }

  

  submitForm() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    const formData = this.myForm.value;
    console.log("formData ", formData);

      this.userService.createUser(formData).subscribe(res=>{
        this.notificationService.success("You Are successfully signup");
        this.back();
      });

  }

  back() {
    this.router.navigate(['', 'login']);
  }

}
