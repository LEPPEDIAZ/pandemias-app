import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentExample } from './dialog-content-example';
import { Http , Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pandemias-app';
  constructor(public dialog: MatDialog, private http: Http, public _DomSanitizationService: DomSanitizer) {}

  stringImage = '';
  stringImage1 = '';

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExample);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  searchImage(){
    const urlOfApi = 'http://3.138.213.189/covid/get_cluster';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }
  searchImage1(){
    const urlOfApi = 'http://3.138.213.189/covid/proporcion_de_contagios_covid';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage1 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }
}
