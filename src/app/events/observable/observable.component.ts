import { Component, OnInit } from '@angular/core';
import { observable, Observable, of, interval } from 'rxjs';
import { concatMap, switchMap, timeout, mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  private obs:Observable<any>;
  constructor() { }

  ngOnInit() {
 //   this.obs.subscribe(x => console.log('obs got a new value:' + x));
    this.obs = new Observable(obs => {
      obs.next("hi");
      obs.next("bye");
      obs.next(3);
      obs.complete;
    });
 //   this.obs.subscribe(x => console.log(x));
 this.obs.pipe(concatMap(val => of(val).pipe(delay(1500))))
 .subscribe(x => console.log(x));
//  this.obs.pipe(interval(2000),concatMap(x => 
//   {
//    console.log(x)
//   return of(x);
  
//   })).subscribe(x => {

//   });
  }
}
