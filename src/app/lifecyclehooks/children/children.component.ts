import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit
} from '@angular/core';



@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit{
  @Input() myNumber:any;
  constructor() { }
  ngOnChanges( changes:SimpleChanges){
    const newNumberChange:SimpleChange=changes.myNumber;
    console.log('ngOnChanges()-> previous value',newNumberChange.previousValue)
    console.log('ngOnChanges()-> current value',newNumberChange.currentValue)
  }
  ngOnInit(): void {
    console.log('ngOnInit value',this.myNumber)
  }
  ngDoCheck() {
    console.log('ngDoCheck value',this.myNumber)
  }
  ngAfterContentInit(){
    console.log('ngDoCheck value get only once')
  }
  ngAfterContentChecked(){
    console.log('ngContentChecked value get every once')
  }
ngOnDestroy(){
    console.log('component has been destroyed')
}
}
