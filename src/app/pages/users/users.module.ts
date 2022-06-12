import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    UserListComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatFormFieldModule
  ]
})
export class UsersModule { }
