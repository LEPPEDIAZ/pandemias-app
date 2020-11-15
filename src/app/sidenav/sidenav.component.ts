import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavWidth = 3;
  ngStyle: string;
  constructor(public _DomSanitizationService: DomSanitizer) {
  }

  @Input() stringImage: string;

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 35;
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