import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  isvisable: boolean=true;
  private myNumber: any=25;
  get  counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  switchVisability(){
    this.isvisable=! this.isvisable;
  }
}
