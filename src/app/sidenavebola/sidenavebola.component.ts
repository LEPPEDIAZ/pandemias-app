import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavebola',
  templateUrl: './sidenavebola.component.html',
  styleUrls: ['./sidenavebola.component.css']
})
export class SidenavEbolaComponent implements OnInit {

  sidenavWidth = 3;
  ngStyle: string;
  constructor() {

  }

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 50;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 3;
    console.log('decrease sidenav width');
  }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }

}