import {AbstractControl} from "@angular/forms";
export function PasswordValidation(control:AbstractControl):{[key:string]:boolean}| null{
const password=control.get('password');
const conformPassword=control.get('conformPassword');
if(password?.pristine || conformPassword?.pristine){
  return null;
}
return password && conformPassword && password.value != conformPassword.value?
  {'mismatch':true}:null;
}
