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
  stringImage2 = '';
  stringImage3 = '';
  stringImage4 = '';
  stringImage5 = '';

  stringImage7 = '';
  stringImage8 = '';

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExample);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  searchImage(){
    const urlOfApi = 'https://mochi.software/covid/get_cluster';
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
    const urlOfApi = 'https://mochi.software/covid/proporcion_de_contagios_covid';
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
  searchImage2(){
    const urlOfApi = 'https://mochi.software/covid/crecimiento_diario_covid';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage2 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }

  searchImage3(){
    const urlOfApi = 'https://mochi.software/covid/confirmados_red_neuronal';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage3 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }
  searchImage4(){
    const urlOfApi = 'https://mochi.software/covid/mortalidad_red_neuronal';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage4 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }

  searchImage5(){
    const urlOfApi = 'https://mochi.software/covid/recuperacion_red_neuronal';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult);
          this.stringImage5 = 'data:image/png;base64, ' + searchResult.text();
        }
      );
  }
  searchImage7(){
    const urlOfApi = 'https://mochi.software/covid/total';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log(searchResult.text());
          this.stringImage7 = searchResult.text();
        }
      );
  }
  searchImage8(){
    const urlOfApi = 'https://mochi.software/covid/fecha_actual';
    this.http.get(urlOfApi)
      .subscribe(
        (res: Response) =>
        {
          const searchResult = res;
          console.log("date:"+ searchResult.text());
          this.stringImage8 =  searchResult.text();
        }
      );
  }
}
