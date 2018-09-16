import { Component, OnInit,ViewChild , NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {logIn} from '../../models/model';
import {CommonservicesService} from '../../services/commonservices.service'
@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private zone:NgZone, private router:Router,private CommonservicesService:CommonservicesService) { }
  model:logIn=new logIn('','');
  ngOnInit() {

  }
  loginSubmit(email,password){
    this.CommonservicesService.userLogin(this.model).subscribe((data=>{
      
    }))
  }

}
