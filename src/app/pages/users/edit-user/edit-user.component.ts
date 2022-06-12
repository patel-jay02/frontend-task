import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/services/user.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  _id: string = '';
  user:any;
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
      mobile: ['', [Validators.required,Validators.pattern(this.mobilePattern)]],

    });
   }
  get controls() { return this.myForm.controls; }


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if(params['_id'] !=  '0') {
        this._id = params['_id'];
        this.getUser(this._id);
      } 

    });

  }

  
getUser(id:any){
  this.userService.getUser(id).subscribe(data => {
    console.log(data);
    
    if (data) {
      this.user = data;
      this.myForm.patchValue(data);
      this.myForm.controls['username'].disable();
      this.myForm.controls['email'].disable();
      this.myForm.controls['password'].disable();
    }
  })
}
  submitForm() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    const formData = this.myForm.value;
    console.log("formData ", formData);

    
    if(this._id.length > 0) {
      this.userService.updateUser(this._id, formData).subscribe(res=>{
        this.notificationService.success("User is updated successfully");
        this.back();
      });
    } else {
      this.userService.createUser(formData).subscribe(res=>{
        this.notificationService.success("User is created successfully");
        this.back();
      });
    }

  }

  back() {
    this.router.navigate(['', 'task', 'users']);
  }

}
