import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http'
import { Observable } from 'rxjs';
import {map,filter,catchError,mergeMap} from 'rxjs/operators'
import {apiResponse} from '../models/model'
@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {
  baseURL:any="http://localhost:3024/api/";
  constructor(private http:Http) { }
  userLogin(obj):Observable<apiResponse>{
    var API_URL =this.baseURL+"user/login";
    return this.http.post(API_URL,obj).pipe(
      map(res => <apiResponse>res.json())
    )
  }
  registerForm(obj):Observable<apiResponse>{
    var API_URL =this.baseURL+"user/registration";
    return this.http.post(API_URL,obj).pipe(
      map(res => <apiResponse>res.json())
    )
  }
}
