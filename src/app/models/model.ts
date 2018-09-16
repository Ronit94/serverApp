export interface commonSMD {
    userId:any
    id:any,
    title:any,
    body:any
}
export interface apiResponse{
  responseCode:number,
  responseText:string,
  responseData:any,
  errors:any
}



export class otp{
    constructor(
      public one:any,
      public two:any,
      public three:any,
      public four:any,
      public five:any,
      public six:any
    ) {  }
  }


  export class signUp{
    constructor(
      public firstName:string,
      public lastName:string,
      public email:string,
      public country_code:string,
      public phone:string,
      public dob:any,
      public zip:any,
      public password:string,
      public cPassword:string
    ) {  }
  }

  export class addKids{
    constructor(
      public firstName:string,
      public lastName:string,
      public dob:any,
      public gender:any,
     
    ) {  }
  }

  export class editKids{
    constructor(
      public firstName:string,
      public lastName:string,
      public dob:any,
      public gender:any,
     
    ) {  }
   }


  export class logIn{
    constructor(
      public email:string,
      public password:string,
    ) {  }
  }


  export class socialsignUp{
    constructor(
      public firstName:string,
      public lastName:string,
      public email:string,
      public country_code:string,
      public phone:string,
      public dob:any,
      public zip:any,
    ) {  }
  }

  export class forgotPass{
    constructor(
      public phone:string,
      public country_code:string
    ) {  }
  }
  

  export class resetPass{
    constructor(
      public password:string,
      public cPassword:string
    ) {  }
  }


  export class claimActivity{
    constructor(
      public firstName:string,
      public lastName:string,
      public phone:any,
      public email:any,
      public businessName:string,
      public addnlComments:string
    ) {  }
  }

  export class contactUS{
    constructor(
      public title:string,
      public msg:string
    ) {  }
  }


  export class activitySuggest{
    constructor(  
   public categoryId:any,
   public businessName:string,
   public website:string,
   public phone:any,
   public addnlComments:string
    ) {  }
  }

  
  export class profileDetails{
    constructor(  
   public firstName:any,
   public lastName:string,
   public dob:any,
   public zip:any,
   public image:string,
   public phone:any,
   public email:string,
    ) {  }
  }


    
  export class changePassword{
    constructor(  
   public old_password:any,
   public new_password:string,
   public c_password:any,
    ) {  }
  }

  



