import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {
  // addLoanType: FormGroup
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

  }
  // addLoanType=new FormGroup({
  //   'loanName':new FormControl(),
  //   'loanDescription': new FormControl(),
  //   'loanType':new FormControl()
  // })
  addLoanType=this._fb.group({
    'loanName':['my loan application'],
    'loanDescription':[''],
    'loanType':['Gold name']
  })





  LoanType(){
   // console.log( this.addLoanType.value)
     // @ts-ignore
    // console.log( this.addLoanType.get('loanType').value)
    this.addLoanType.valueChanges.subscribe(data=>{
      console.log(data)
    })
  }
}
