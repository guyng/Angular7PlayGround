import { Component, OnInit } from '@angular/core';
import { Observable, interval, pipe, of, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  private toggle:boolean = true;
  public message$: Observable<string>;
  public birthday:Date = new Date(1988, 3, 15);
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.resend(); 
  }

  ngOnInit() {
    // setTimeout(() => this.message$ = of("test"),5500);
  }

  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );


  }

  public get format():string   { return this.toggle ? 'shortDate' : 'fullDate'; }
  public toggleFormat():void { this.toggle = !this.toggle; }

}
