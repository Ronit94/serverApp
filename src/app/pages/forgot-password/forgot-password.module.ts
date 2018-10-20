import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {routing} from './forgot-password-routing';

import { ForgotPasswordComponent } from "./forgot-password.component";

import {FormsModule,FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';

import {NgxSpinnerModule} from 'ngx-spinner'

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
    imports:[
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        SweetAlert2Module.forRoot()
    ],
    declarations:[ForgotPasswordComponent]

})

export class ForgotPasswordModule{}