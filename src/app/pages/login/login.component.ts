import { Component, OnInit,ViewChild , NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {logIn} from '../../models/model';
import {CommonservicesService} from '../../services/commonservices.service'
import swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private zone:NgZone, private router:Router,private CommonservicesService:CommonservicesService,private spinnerService:NgxSpinnerService) { }
  model: any = {};
  ngOnInit() {

  }
  onSubmit(){
    this.spinnerService.show()
    this.CommonservicesService.userLogin(this.model).subscribe((data=>{
      if(data.responseCode===404){
        swal({
          type: 'error',
          title: 'User missing',
          text: data.responseText,
          footer: 'Please login again with correct credential'
        })
      }else if(data.responseCode==500){
        swal({
          type: 'error',
          title: 'Login Failed',
          text: data.responseText,
          footer: 'Please login again with correct credential'
        })
      }else if(data.responseCode==200 && data.responseData){

        if(data.responseData.is_active!=0){
          localStorage.setItem('token',data.responseData.access_token)
          localStorage.setItem('refreshToken',data.responseData.refreshToken)
  
          const toast = swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000
          });
          toast({
            type: 'success',
            title: 'Signed in successfully'
          })
          this.router.navigate(['/dashboard'])
        }else{
          swal({
            type: 'error',
            title: 'User still not activated',
            text: 'Please activate your user',
            footer: 'Please check your mail to activate your account'
          })
        } 
      }
      this.spinnerService.hide()
    }))
  }

}
