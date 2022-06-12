import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './api/api.module';
import { PagesModule } from './pages/pages.module';
import { ThemeModule } from './theme/theme.module';
import { LoginComponent } from './pages/login/login.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { SharedService } from './service/shared.service';
import { LoaderService } from './service/loader.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { APP_INITIALIZER } from '@angular/core';
import { AppInitService } from './api/services/app-init.service';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldControl } from '@angular/material/form-field';
import { SignupComponent } from './pages/signup/signup.component';

export function appProviderFactory(provider: AppInitService) {
  return () => provider.Init();
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    SharedModule.forRoot(),
    ApiModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    { provide: APP_INITIALIZER, useFactory: appProviderFactory,deps: [AppInitService], multi: true },
    ApiModule,
    SharedService,
    LoaderService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
