import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("on first load!")
    debugger;
  }

  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("after components view(html) loaded!");
    debugger;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("on page re-render!");
    debugger;
    
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("on component view re-render!");
    debugger;
  }

  ngOnDestroy(): void {
    console.log("on destroy!");
    debugger;
    
  }

}
