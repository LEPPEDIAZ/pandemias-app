import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Afghanistan', weight: 1},
  {position: 2, name: 'Albania', weight: 1},
  {position: 3, name: 'Algeria', weight: 1},
  {position: 4, name: 'Angola', weight: 1},
  {position: 5, name: 'Antigua and Barbuda	', weight: 1},
];

@Component({
  selector: 'app-sidenavvih',
  templateUrl: './sidenavvih.component.html',
  styleUrls: ['./sidenavvih.component.css']
})
export class SidenavVIHComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;


  sidenavWidth = 3;
  sidenavOpacity = 0;
  ngStyle: string;
  constructor() {

  }

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 50;
    this.sidenavOpacity = 1;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 3;
    this.sidenavOpacity = 0;
    console.log('decrease sidenav width');
  }
  
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }

}