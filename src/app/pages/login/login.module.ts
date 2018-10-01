import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {routing} from './login-routing';

import { LoginComponent } from "./login.component";

import {FormsModule,FormGroup,FormControl} from '@angular/forms';

import {NgxSpinnerModule} from 'ngx-spinner'

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
    imports:[
        CommonModule,
        routing,
        FormsModule,
        NgxSpinnerModule,
        SweetAlert2Module.forRoot()
    ],
    declarations:[LoginComponent]

})

export class LoginModule{}