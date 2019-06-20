import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-sample',
  templateUrl: './child-sample.component.html',
  styleUrls: ['./child-sample.component.css']
})

export class ChildSampleComponent implements OnInit {
  @Input()
  public age: number = 5;
  @Output()
  public childAge:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public setChildAge(childAge: number): any
  {
    debugger;
    this.childAge.emit(childAge);
  }

}
