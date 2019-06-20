import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-sample',
  templateUrl: './parent-sample.component.html',
  styleUrls: ['./parent-sample.component.css']
})
export class ParentSampleComponent implements OnInit {
  public childAge: number
  constructor() { }

  ngOnInit() {
  }

  public onChildGetAge(childAge: number): any {
    this.childAge = childAge;
  }

}
