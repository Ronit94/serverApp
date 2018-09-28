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
          text: 'Sorry User is not present',
          footer: 'Please login again with correct credential'
        })
      }else if(data.responseCode==500){
        swal({
          type: 'error',
          title: 'Login Failed',
          text: 'Something went wrong!',
          footer: 'Please login again with correct credential'
        })
      }else if(data.responseCode==200 && data.responseData){
        localStorage.setItem('token',data.responseData.access_token)
        localStorage.setItem('refreshToken',data.responseData.refreshToken)

        swal({
          position: 'center',
          type: 'success',
          title: 'You have successfully logged in',
          showConfirmButton: true,
          timer: 1500
        })
        this.router.navigate(['/king'])
      }
      this.spinnerService.hide()
    }))
  }

}
