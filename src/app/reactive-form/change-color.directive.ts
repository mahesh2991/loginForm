import {Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _element:ElementRef) {
    this._element.nativeElement.style.color='red'
  }
@HostListener('mouseenter') mouseEnter(){
    this.changeColor('green')
}
  @HostListener('mouseleave') mouseLeave(){
    this.changeColor('red')
  }
  changeColor(color: any){
    this._element.nativeElement.style.color=color
  }
}
