import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements {

private username = new FormControl('')
private password = new FormControl('')
public isValid:boolean=false
constructor(public fb: FormBuilder) {}

loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
 });


  onSubmit(){
    if(this.loginForm.valid){
      
      
    }
  }
}
