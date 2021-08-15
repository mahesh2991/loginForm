import { Injectable } from '@angular/core';
import {UserInterface} from './userInterface'
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserApiService {


  constructor(private _http:HttpClient) { }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"unknown Server Error")
  }

  getUserData():Observable<UserInterface[]>{

    return this._http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(catchError(this.errorHandler))
  }

}
