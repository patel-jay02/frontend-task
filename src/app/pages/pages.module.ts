import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: []
})

export class PagesModule { }
