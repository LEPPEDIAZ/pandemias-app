import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http , Response } from '@angular/http';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  searchString : String = '';
  sidenavOpacity = 0;
  sidenavWidth = 3;
  ngStyle: string;
  constructor( private http: Http, public _DomSanitizationService: DomSanitizer) {}

  @Input() stringImage: string;
  @Input() stringImage1: string;
  @Input() stringImage2: string;
  @Input() stringImage3: string;
  @Input() stringImage4: string;
  @Input() stringImage5: string;

  stringImage6 = '';

  

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
  searchImagecountry(){
    const urlOfApi = 'http://3.138.213.189/covid/confirmados_red_neuronal_pais/' + this.searchString;
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage6 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }

}