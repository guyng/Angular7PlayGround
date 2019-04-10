import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  public testing: number = 1;
  constructor(private testService: TestService) 
  {
    testService.PrintSomething(this.testing);
  }

  ngOnInit() {
  }

}
