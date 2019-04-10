import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(activatedRoute: ActivatedRoute,router: Router) { 
    console.log(activatedRoute.snapshot.params);
    activatedRoute.queryParams.subscribe(params => {
      console.log(params);

    })
    router.navigate(['eager']);
  }

  ngOnInit() {
  }

}
