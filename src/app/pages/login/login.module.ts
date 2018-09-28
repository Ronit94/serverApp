import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {LoginRoutingModule} from './login-routing.module';

import { LoginComponent } from "./login.component";

import {FormsModule,FormGroup,FormControl} from '@angular/forms';

import {NgxSpinnerModule} from 'ngx-spinner'

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
    imports:[
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        NgxSpinnerModule,
        SweetAlert2Module.forRoot()
    ],
    declarations:[LoginComponent]

})

export class LoginModule{}