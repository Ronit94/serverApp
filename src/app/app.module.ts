import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
//import {LoginComponent} from './login/login.component';
import { routing } from './app-routing';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, routing,FormsModule,HttpModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
