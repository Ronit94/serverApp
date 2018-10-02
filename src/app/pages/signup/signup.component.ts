import { Component, OnInit,ViewChild , NgZone,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {logIn} from '../../models/model';
import {CommonservicesService} from '../../services/commonservices.service'
import swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private zone:NgZone, private router:Router,private CommonservicesService:CommonservicesService,private spinnerService:NgxSpinnerService) { }
  model: any = {};
  public fileToUpload:any=''
  public show_selected_image:boolean=false
  public Imageurl:any=''
  public ImageDiv:any;
  public profileImage:any;

  ngOnInit() {

  }

  readUrl(event:any) {
    var type = event.target.files[0].type;
    var name = event.target.files[0].name;
     var size = ~~(event.target.files[0].size/1024);
     var image_type_arr = name.split('.');
     var image_type = image_type_arr[(image_type_arr.length-1)];
     image_type =  image_type.toLowerCase();
     if(size>2048){
      swal("Error",'Image size should be within 2 MB.', "error");
      return false;
    }
    if(type=='')
    {
      swal("Error", 'Please upload valid file (.jpg, .jpeg or .png).', "error"); 
      return false;
    }
    // if ( (image_type!='jpg' || image_type!='jpeg' || image_type!='png') )
    // {
    //   swal("Error", 'Please upload valid file (.jpg, .jpeg or .png).', "error");
    //   return false;
    // }
    if ( (image_type ==='jpg' || image_type ==='jpeg' || image_type ==='png') )
    {
      this.fileToUpload =event.target.files[0];
    }
    else{
      swal("Error", 'Please upload valid file (.jpg, .jpeg or .png).', "error");
       return false;
     }
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.Imageurl= event.target.result;
        this.show_selected_image=true;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
   // this.handleFileInput(event.target.files);
    
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
      }
      this.spinnerService.hide()
    }))
  }

}

