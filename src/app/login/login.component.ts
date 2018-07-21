import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements {
  ngOnInit() {
  
  }
  loginForm: FormGroup; constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
        defaultFormEmail: ['', Validators.required],
        defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
      });
  }
  onSubmit() { 

      alert('defaultFormEmail'+this.loginForm.defaultFormEmail)
      alert('defaultFormEmail'+this.loginForm.defaultFormPass)

   }



}
