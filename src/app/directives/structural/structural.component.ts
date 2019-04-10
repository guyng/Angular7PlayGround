import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  public num: number = 10;
  public arr : number[] = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
