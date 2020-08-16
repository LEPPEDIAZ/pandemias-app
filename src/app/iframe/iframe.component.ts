import { Component, ViewChild, ElementRef } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-iframe',
   template: `<iframe #iframe width="100%" height="100%"></iframe>`,
  styles: [ 'iframe { min-height: 1000px; }' ]
  
})
export class IframeComponent  {
  name = 'Angular';
  src;
  
  @ViewChild('iframe') iframe: ElementRef;
 constructor(private  route: ActivatedRoute,) {

 }
  ngAfterViewInit() {

    this.route.url.subscribe((urlSegments: any) => {
      const routes = urlSegments[0];
      console.log(urlSegments[0]);
      if(routes.path === 'iframe1') {
        this.src = 'https://leppediaz.github.io/Pandemias_Mundiales/dashboard_COVID.html';
      } 
      if(routes.path === 'iframe2') {
        this.src = 'https://leppediaz.github.io/Pandemias_Mundiales/dashboard_Ebola.html';
      } 
      if(routes.path === 'iframe3') {
        this.src = 'https://leppediaz.github.io/Pandemias_Mundiales/dashboard_VIH.html';
      } 
      
     
      

    if (this.iframe) {
      this.iframe.nativeElement.src = this.src;
    }
    });
    // DEVELOPMENT TESTING ONLY
    
  }
}
