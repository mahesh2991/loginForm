import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserApiService} from "../user-api.service";




@Component({
  selector: 'app-promiseobservable',
  templateUrl: './promiseobservable.component.html',
  styleUrls: ['./promiseobservable.component.css']
})
export class PromiseobservableComponent implements OnInit {
public result:any=[];
// public countryData:any=[];

  public errorMsg:any=[];
// private _url:string="https://restcountries.eu/rest/v2/name/";
//   private _url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private _userserv:UserApiService) { }

  ngOnInit(){

    this._userserv.getUserData().subscribe(data=>this.result=data,error=>this.errorMsg=error);


// let prm =new Promise((res)=>{                 // it is not lazy loading
//   console.log('promise is running')
//   res('success')
// })
// prm.then(value => {
//   console.log(value)
// })


// let ob=new Observable((obs)=>{                // it is lazy loading thats why subscribe
//   console.log('observable is running')
//   obs.next('success')
// })
// ob.subscribe(value => {
//   console.log(value)
// })


//   let prom =new Promise((res)=>{     //it emits only only one value that is first value
//   // res('mahesh')
//   res('MANISH')
//   res('vivek')
// })
// prom.then(value => {
//   console.log(value)
// })


    // let obs= new Observable((x)=>{          //it emits only only multivalued at a time
    //   x.next('mahesh');
    //   x.next('mahesh');
    //   x.next('mahesh');
    // })
    // obs.subscribe((value)=>{
    //   console.log(value)
    // })











  }


//   search(country:any){
// console.log((country));
// this._http.get(this._url).toPromise().then(value => {
//   console.log(value)
//   this.countryData=value
// })
// }



}
