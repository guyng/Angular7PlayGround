import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of, pipe, interval, fromEvent } from 'rxjs';
import {map,delay, concatMap, filter} from 'rxjs/operators';

@Component({
  selector: 'app-obs-sample',
  templateUrl: './obs-sample.component.html',
  styleUrls: ['./obs-sample.component.css']
})
export class ObsSampleComponent implements OnInit {
  private testObservable : Observable<any>;
  constructor() { }

  ngOnInit() {
    this.testObservable = of(1,2,3);
    const squareValues = pipe(map((x:any) => x * x));
    const squaredNums = squareValues(this.testObservable);
    squaredNums.subscribe(result => {
      console.log(result);
    })

  //   const nums = of(1, 2, 3, 4, 5);
 
  //   // Create a function that accepts an Observable.
  //   const squareOddVals = pipe(
  //     filter((n: number) => n % 2 !== 0),
  //     map(n => n * n)
  //   );
     
  //   // Create an Observable that will run the filter and map functions
  //   const squareOdd = squareOddVals(nums);
     
  //   // Subscribe to run the combined functions
  //   squareOdd.subscribe(x => console.log(x));


  //   const source = of(1, 2, 3, 4, 5);
  // //transparently log values from source with 'do'
  // const example = source.pipe(
  //   tap(val => console.log(`BEFORE MAP: ${val}`)),
  //   map(val => val + 10),
  //   tap(val => console.log(`AFTER MAP: ${val}`))
  // );

  // //'do' does not transform values
  // //output: 11...12...13...14...15
  // const subscribe = example.subscribe(val => console.log(val));

  }

}
