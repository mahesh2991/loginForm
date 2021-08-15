import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {nameValidator} from "../shared/userName-validator";
import {PasswordValidation} from "../shared/password-validation";
import {ReactiveFormService} from "../reactive-form.service"

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  constructor( private _myformBuilder:FormBuilder,private _recformSer:ReactiveFormService) { }

  ngOnInit(): void {
  }

  // regestrationForm :any=new FormGroup({
  //   userName:new FormControl('mahesh',[Validators.required,Validators.minLength(3)]),
  //   password:new FormControl(''),
  //   conformPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state: new FormControl(''),
  //     pincode:new FormControl('')
  //   })
  // })
  regestrationForm :any=this._myformBuilder.group({
    userName:['mahesh',[Validators.required,Validators.minLength(3),nameValidator(/admin/i),nameValidator(/password/i),]],
    email:[''],
    subscribe:[false],
    password:[''],
    conformPassword:[''],
    address:this._myformBuilder.group({
      city:[''],
      state:[''],
      pincode:['']
    })

  },{validator:PasswordValidation})


  displayValues(){
    this.regestrationForm.patchValue(({
      userName:'test user',
      password:'test password',
      conformPassword:'test conformPassword',
      address:{
        city:' test city',
        state:'test state',
        pincode:'test pincode'
      }

    }))
  }
  get userName(){
    return this.regestrationForm.get('userName');
  }
  onSubmit(regestrationForm:any){
    console.log(regestrationForm.value);
    this._recformSer.enroll(this.regestrationForm.value).subscribe(
      data =>console.log('success',data)
    )
  }
  resetForm(formValue:NgForm){
    formValue.reset();

  }

}
