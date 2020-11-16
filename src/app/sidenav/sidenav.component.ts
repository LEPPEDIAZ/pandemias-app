import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavOpacity = 0;
  sidenavWidth = 3;
  ngStyle: string;
  constructor(public _DomSanitizationService: DomSanitizer) {
  }

  @Input() stringImage: string;
  @Input() stringImage1: string;

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth =  50;
    console.log('increase sidenav width');
    this.sidenavOpacity = 1;
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