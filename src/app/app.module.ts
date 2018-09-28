import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
//import {LoginComponent} from './login/login.component';

import { AppRoutingModule } from ".//app-routing.module";
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthService as AuthGuard } from './services/auth.service';


@NgModule({
  declarations: [AppComponent, SignupComponent, ForgotPasswordComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
