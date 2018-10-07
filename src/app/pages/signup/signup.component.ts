import { Component, OnInit,ViewChild , NgZone,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';
import {logIn} from '../../models/model';
import {CommonservicesService} from '../../services/commonservices.service'
import swal from 'sweetalert2';
import { error } from 'util';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private zone:NgZone, private router:Router,private CommonservicesService:CommonservicesService,private spinnerService:NgxSpinnerService,private formBuilder:FormBuilder) { }
  model: any = {};
  public fileToUpload:any=''
  public show_selected_image:boolean=false
  public Imageurl:any=''
  public ImageDiv:any;
  public profileImage:any;
  RegistrationForm: FormGroup;
  

  ngOnInit() {
    this.RegistrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email:['',Validators.required],
      phoneno:['',Validators.required],
      Company:['',Validators.required],
      dob:['',Validators.required],
      password: ['', Validators.required],
      confirmPassword:['',Validators.required],
      image:['',Validators.required]
  });

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
        //this.RegistrationForm.controls['image'].setValue(event.target.result)
        this.Imageurl= event.target.result;
        this.show_selected_image=true;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    
  }





  onSubmit(){
    if(this.RegistrationForm.invalid){
      swal({
        type:'error',
        title:'Form data is missing',
        text:'Sorry! Cant process data as you havent complete this step'
      })
    }

    this.spinnerService.show()

    let formData=new FormData()
    formData.append("image", this.fileToUpload);
    formData.append("fullName", this.RegistrationForm.get('fullName').value);
    formData.append("email", this.RegistrationForm.get('email').value);
    formData.append("phoneno",this.RegistrationForm.get('phoneno').value);
    formData.append("company",this.RegistrationForm.get('Company').value);
    formData.append("dob", this.RegistrationForm.get('dob').value);
    formData.append("password", this.RegistrationForm.get('password').value);
    formData.append("confirmpassword",this.RegistrationForm.get('confirmPassword').value);


    this.CommonservicesService.registerForm(formData).subscribe((data=>{
      if(data.responseCode===404){
        swal({
          type: 'error',
          title: 'User data is missing',
          text: data.responseText,
          footer: 'Please register again with correct input data'
        })
      }else if(data.responseCode==500){
        swal({
          type: 'error',
          title: 'Registration Failed',
          text: data.responseText,
          footer: 'Please register again with correct input data'
        })
      }else if(data.responseCode==200 && data.responseData){
        //localStorage.setItem('token',data.responseData.access_token)
        //localStorage.setItem('refreshToken',data.responseData.refreshToken)

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
        this.router.navigate(['/login'])
      }
      this.spinnerService.hide()
    }))
  }

}

