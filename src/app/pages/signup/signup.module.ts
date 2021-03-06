import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {routing} from './signup-routing';

import { SignupComponent } from "./signup.component";

import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import {NgxSpinnerModule} from 'ngx-spinner'

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
    imports:[
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        BsDatepickerModule.forRoot(),
        SweetAlert2Module.forRoot()
    ],
    declarations:[SignupComponent]

})

export class SignUpModule{}