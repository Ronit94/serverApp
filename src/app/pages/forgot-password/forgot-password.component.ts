import { Component, OnInit,ViewChild , NgZone,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';
import {CommonservicesService} from '../../services/commonservices.service'
import swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private zone:NgZone, private router:Router,private CommonservicesService:CommonservicesService,private spinnerService:NgxSpinnerService,private formBuilder:FormBuilder) { }
  ForgotPasswordForm: FormGroup;
  ngOnInit() {
    this.ForgotPasswordForm = this.formBuilder.group({
      email:['',Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    let obj={
      email:this.ForgotPasswordForm.get('email').value
    }
   this.CommonservicesService.checkUserEmail(obj).subscribe((response)=>{
    if(response.responseCode==404){
      console.log('enter')
    }
    console.log('response',response)
   })
  }

}
