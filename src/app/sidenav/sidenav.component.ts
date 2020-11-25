import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http , Response } from '@angular/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:"Algeria", weight:0},
  {position: 1, name:"Antigua and Barbuda", weight:0},
  {position: 1, name:"Cameroon", weight:0},
  {position: 1, name:"Chad", weight:0},
  {position: 1, name:"Comoros", weight:0},
  {position: 1, name:"Congo (Kinshasa)", weight:0},
  {position: 1, name:"Cote d\'Ivoire", weight:0},
  {position: 1, name:"Cuba", weight:0},
  {position: 1, name:"Djibouti", weight:0},
  {position: 1, name:"Gabon", weight:0},
  {position: 1, name:"Greece", weight:0},
  {position: 1, name:"Hungary", weight:0},
  {position: 1, name:"Iran", weight:0},
  {position: 1, name:"Japan", weight:0},
  {position: 1, name:"Latvia", weight:0},
  {position: 1, name:"Liberia", weight:0},
  {position: 1, name:"Lithuania", weight:0},
  {position: 1, name:"Mali", weight:0},
  {position: 1, name:"Pakistan", weight:0},
  {position: 1, name:"Portugal", weight:0},
  {position: 1, name:"Sao Tome and Principe", weight:0},
  {position: 1, name:"Serbia", weight:0},
  {position: 1, name:"Sierra Leone", weight:0},
  {position: 1, name:"Slovenia", weight:0},
  {position: 1, name:"Somalia", weight:0},
  {position: 1, name:"Sudan", weight:0},
  {position: 1, name:"Tajikistan", weight:0},
  {position: 1, name:"Turkey", weight:0},
  {position: 1, name:"US", weight:0},
  {position: 1, name:"United Arab Emirates", weight:0},
  {position: 1, name:"Uruguay", weight:0},
  {position: 1, name:"Bhutan", weight:1},
  {position: 1, name:"Cambodia", weight:1},
  {position: 1, name:"Canada", weight:1},
  {position: 1, name:"Dominica", weight:1},
  {position: 1, name:"Eritrea", weight:1},
  {position: 1, name:"Grenada", weight:1},
  {position: 1, name:"Holy See", weight:1},
  {position: 1, name:"Laos", weight:1},
  {position: 1, name:"Marshall Islands", weight:1},
  {position: 1, name:"Mongolia", weight:1},
  {position: 1, name:"Saint Kitts and Nevis", weight:1},
  {position: 1, name:"Saint Lucia", weight:1},
  {position: 1, name:"Saint Vincent and the Grenadines", weight:1},
  {position: 1, name:"Seychelles", weight:1},
  {position: 1, name:"Solomon Islands", weight:1},
  {position: 1, name:"Timor-Leste", weight:1},
  {position: 1, name:"Angola", weight:2},
  {position: 1, name:"Argentina", weight:2},
  {position: 1, name:"Bahamas", weight:2},
  {position: 1, name:"Belize", weight:2},
  {position: 1, name:"Bolivia", weight:2},
  {position: 1, name:"Botswana", weight:2},
  {position: 1, name:"Burma", weight:2},
  {position: 1, name:"Cabo Verde", weight:2},
  {position: 1, name:"Colombia", weight:2},
  {position: 1, name:"Costa Rica", weight:2},
  {position: 1, name:"Eswatini", weight:2},
  {position: 1, name:"Ethiopia", weight:2},
  {position: 1, name:"Gambia", weight:2},
  {position: 1, name:"Georgia", weight:2},
  {position: 1, name:"Guyana", weight:2},
  {position: 1, name:"India", weight:2},
  {position: 1, name:"Iraq", weight:2},
  {position: 1, name:"Jamaica", weight:2},
  {position: 1, name:"Jordan", weight:2},
  {position: 1, name:"Kazakhstan", weight:2},
  {position: 1, name:"Kosovo", weight:2},
  {position: 1, name:"Lebanon", weight:2},
  {position: 1, name:"Lesotho", weight:2},
  {position: 1, name:"Libya", weight:2},
  {position: 1, name:"Madagascar", weight:2},
  {position: 1, name:"Montenegro", weight:2},
  {position: 1, name:"Morocco", weight:2},
  {position: 1, name:"Mozambique", weight:2},
  {position: 1, name:"Namibia", weight:2},
  {position: 1, name:"Nepal", weight:2},
  {position: 1, name:"Oman", weight:2},
  {position: 1, name:"Paraguay", weight:2},
  {position: 1, name:"Rwanda", weight:2},
  {position: 1, name:"South Africa", weight:2},
  {position: 1, name:"Suriname", weight:2},
  {position: 1, name:"Syria", weight:2},
  {position: 1, name:"Trinidad and Tobago", weight:2},
  {position: 1, name:"Tunisia", weight:2},
  {position: 1, name:"Uganda", weight:2},
  {position: 1, name:"Uzbekistan", weight:2},
  {position: 1, name:"Venezuela", weight:2},
  {position: 1, name:"Vietnam", weight:2},
  {position: 1, name:"West Bank and Gaza", weight:2},
  {position: 1, name:"Zambia", weight:2},
  {position: 1, name:"Zimbabwe", weight:2},
  {position: 1, name:"Andorra", weight:3},
  {position: 1, name:"Australia", weight:3},
  {position: 1, name:"Austria", weight:3},
  {position: 1, name:"Barbados", weight:3},
  {position: 1, name:"Belgium", weight:3},
  {position: 1, name:"Brunei", weight:3},
  {position: 1, name:"Burkina Faso", weight:3},
  {position: 1, name:"Burundi", weight:3},
  {position: 1, name:"Cyprus", weight:3},
  {position: 1, name:"Denmark", weight:3},
  {position: 1, name:"Diamond Princess", weight:3},
  {position: 1, name:"Estonia", weight:3},
  {position: 1, name:"Finland", weight:3},
  {position: 1, name:"France", weight:3},
  {position: 1, name:"Germany", weight:3},
  {position: 1, name:"Iceland", weight:3},
  {position: 1, name:"Ireland", weight:3},
  {position: 1, name:"Italy", weight:3},
  {position: 1, name:"Korea, South", weight:3},
  {position: 1, name:"Liechtenstein", weight:3},
  {position: 1, name:"Luxembourg", weight:3},
  {position: 1, name:"MS Zaandam", weight:3},
  {position: 1, name:"Malaysia", weight:3},
  {position: 1, name:"Mauritius", weight:3},
  {position: 1, name:"Monaco", weight:3},
  {position: 1, name:"Netherlands", weight:3},
  {position: 1, name:"New Zealand", weight:3},
  {position: 1, name:"Niger", weight:3},
  {position: 1, name:"Norway", weight:3},
  {position: 1, name:"Papua New Guinea", weight:3},
  {position: 1, name:"San Marino", weight:3},
  {position: 1, name:"Singapore", weight:3},
  {position: 1, name:"Spain", weight:3},
  {position: 1, name:"Sri Lanka", weight:3},
  {position: 1, name:"Sweden", weight:3},
  {position: 1, name:"Switzerland", weight:3},
  {position: 1, name:"Taiwan*", weight:3},
  {position: 1, name:"Tanzania", weight:3},
  {position: 1, name:"Thailand", weight:3},
  {position: 1, name:"United Kingdom", weight:3},
  {position: 1, name:"China", weight:4},
  {position: 1, name:"Fiji", weight:4},
  {position: 1, name:"Afghanistan", weight:5},
  {position: 1, name:"Albania", weight:5},
  {position: 1, name:"Armenia", weight:5},
  {position: 1, name:"Azerbaijan", weight:5},
  {position: 1, name:"Bahrain", weight:5},
  {position: 1, name:"Bangladesh", weight:5},
  {position: 1, name:"Belarus", weight:5},
  {position: 1, name:"Benin", weight:5},
  {position: 1, name:"Bosnia and Herzegovina", weight:5},
  {position: 1, name:"Brazil", weight:5},
  {position: 1, name:"Bulgaria", weight:5},
  {position: 1, name:"Central African Republic", weight:5},
  {position: 1, name:"Chile", weight:5},
  {position: 1, name:"Congo (Brazzaville)", weight:5},
  {position: 1, name:"Croatia", weight:5},
  {position: 1, name:"Czechia", weight:5},
  {position: 1, name:"Dominican Republic", weight:5},
  {position: 1, name:"Ecuador", weight:5},
  {position: 1, name:"Egypt", weight:5},
  {position: 1, name:"El Salvador", weight:5},
  {position: 1, name:"Equatorial Guinea", weight:5},
  {position: 1, name:"Ghana", weight:5},
  {position: 1, name:"Guatemala", weight:5},
  {position: 1, name:"Guinea", weight:5},
  {position: 1, name:"Guinea-Bissau", weight:5},
  {position: 1, name:"Haiti", weight:5},
  {position: 1, name:"Honduras", weight:5},
  {position: 1, name:"Indonesia", weight:5},
  {position: 1, name:"Israel", weight:5},
  {position: 1, name:"Kenya", weight:5},
  {position: 1, name:"Kuwait", weight:5},
  {position: 1, name:"Kyrgyzstan", weight:5},
  {position: 1, name:"Malawi", weight:5},
  {position: 1, name:"Maldives", weight:5},
  {position: 1, name:"Malta", weight:5},
  {position: 1, name:"Mauritania", weight:5},
  {position: 1, name:"Mexico", weight:5},
  {position: 1, name:"Moldova", weight:5},
  {position: 1, name:"Nicaragua", weight:5},
  {position: 1, name:"Nigeria", weight:5},
  {position: 1, name:"North Macedonia", weight:5},
  {position: 1, name:"Panama", weight:5},
  {position: 1, name:"Peru", weight:5},
  {position: 1, name:"Philippines", weight:5},
  {position: 1, name:"Poland", weight:5},
  {position: 1, name:"Qatar", weight:5},
  {position: 1, name:"Romania", weight:5},
  {position: 1, name:"Russia", weight:5},
  {position: 1, name:"Saudi Arabia", weight:5},
  {position: 1, name:"Senegal", weight:5},
  {position: 1, name:"Slovakia", weight:5},
  {position: 1, name:"South Sudan", weight:5},
  {position: 1, name:"Togo", weight:5},
  {position: 1, name:"Ukraine", weight:5},
  {position: 1, name:"Western Sahara", weight:5},
  {position: 1, name:"Yemen", weight:5},
  {position: 1, name:"Afghanistan", weight:2},
  {position: 1, name:"Antigua and Barbuda", weight:2},
  {position: 1, name:"Bahamas", weight:2},
  {position: 1, name:"Bangladesh", weight:2},
  {position: 1, name:"Belize", weight:2},
  {position: 1, name:"Bhutan", weight:2},
  {position: 1, name:"Dominica", weight:2},
  {position: 1, name:"Egypt", weight:2},
  {position: 1, name:"Germany", weight:2},
  {position: 1, name:"Grenada", weight:2},
  {position: 1, name:"Indonesia", weight:2},
  {position: 1, name:"Jordan", weight:2},
  {position: 1, name:"Kazakhstan", weight:2},
  {position: 1, name:"Kiribati", weight:2},
  {position: 1, name:"Kuwait", weight:2},
  {position: 1, name:"Luxembourg", weight:2},
  {position: 1, name:"Madagascar", weight:2},
  {position: 1, name:"Micronesia (Federated States of)", weight:2},
  {position: 1, name:"Monaco", weight:2},
  {position: 1, name:"North Macedonia", weight:2},
  {position: 1, name:"Pakistan", weight:2},
  {position: 1, name:"Philippines", weight:2},
  {position: 1, name:"Qatar", weight:2},
  {position: 1, name:"Russian Federation", weight:2},
  {position: 1, name:"Saint Kitts and Nevis", weight:2},
  {position: 1, name:"Saint Lucia", weight:2},
  {position: 1, name:"Saint Vincent and the Grenadines", weight:2},
  {position: 1, name:"Samoa", weight:2},
  {position: 1, name:"Saudi Arabia", weight:2},
  {position: 1, name:"Seychelles", weight:2},
  {position: 1, name:"Solomon Islands", weight:2},
  {position: 1, name:"South Sudan", weight:2},
  {position: 1, name:"Tajikistan", weight:2}
];


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

  @Input() stringImage7: string;
  @Input() stringImage8: string;

  stringImage6 = '';
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  

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
    const urlOfApi = 'https://mochi.software/covid/confirmados_red_neuronal_pais/' + this.searchString;
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