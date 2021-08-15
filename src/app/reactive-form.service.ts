import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./reactive-form/User";

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {
  _url='http://localhost:3000/submit';
  constructor(private _http:HttpClient) { }
  enroll(user: User){
    return this._http.post<any>(this._url,user);
  }
}
