import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prom-obs-country-data',
  templateUrl: './prom-obs-country-data.component.html',
  styleUrls: ['./prom-obs-country-data.component.css']
})
export class PromObsCountryDataComponent implements OnInit {
  public countryData:any=[];
  private _url:string="https://restcountries.eu/rest/v2/name/";
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  search(country:any){
    console.log((country));
    this._http.get(this._url+country).toPromise().then(value => {
      console.log(value)
      this.countryData=value
    })
  }

}
