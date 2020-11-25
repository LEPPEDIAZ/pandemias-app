import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:"Albania", weight:0},
  {position: 1, name:"Argentina", weight:0},
  {position: 1, name:"Australia", weight:0},
  {position: 1, name:"Barbados", weight:0},
  {position: 1, name:"Brazil", weight:0},
  {position: 1, name:"Cambodia", weight:0},
  {position: 1, name:"Comoros", weight:0},
  {position: 1, name:"El Salvador", weight:0},
  {position: 1, name:"Guatemala", weight:0},
  {position: 1, name:"Honduras", weight:0},
  {position: 1, name:"Ireland", weight:0},
  {position: 1, name:"Italy", weight:0},
  {position: 1, name:"Mexico", weight:0},
  {position: 1, name:"Montenegro", weight:0},
  {position: 1, name:"Netherlands", weight:0},
  {position: 1, name:"New Zealand", weight:0},
  {position: 1, name:"Romania", weight:0},
  {position: 1, name:"Serbia", weight:0},
  {position: 1, name:"Spain", weight:0},
  {position: 1, name:"Thailand", weight:0},
  {position: 1, name:"Timor-Leste", weight:0},
  {position: 1, name:"Trinidad and Tobago", weight:0},
  {position: 1, name:"Venezuela (Bolivarian Republic of)", weight:0},
  {position: 1, name:"Algeria", weight:1},
  {position: 1, name:"Angola", weight:1},
  {position: 1, name:"Armenia", weight:1},
  {position: 1, name:"Austria", weight:1},
  {position: 1, name:"Azerbaijan", weight:1},
  {position: 1, name:"Bahrain", weight:1},
  {position: 1, name:"Belarus", weight:1},
  {position: 1, name:"Bolivia (Plurinational State of)", weight:1},
  {position: 1, name:"Bosnia and Herzegovina", weight:1},
  {position: 1, name:"Democratic Republic of the Congo", weight:1},
  {position: 1, name:"Denmark", weight:1},
  {position: 1, name:"Ecuador", weight:1},
  {position: 1, name:"Equatorial Guinea", weight:1},
  {position: 1, name:"Estonia", weight:1},
  {position: 1, name:"Finland", weight:1},
  {position: 1, name:"Gambia", weight:1},
  {position: 1, name:"Georgia", weight:1},
  {position: 1, name:"Guinea-Bissau", weight:1},
  {position: 1, name:"Hungary", weight:1},
  {position: 1, name:"India", weight:1},
  {position: 1, name:"Iran (Islamic Republic of)", weight:1},
  {position: 1, name:"Japan", weight:1},
  {position: 1, name:"Lao People\'s Democratic Republic", weight:1},
  {position: 1, name:"Latvia", weight:1},
  {position: 1, name:"Liberia", weight:1},
  {position: 1, name:"Lithuania", weight:1},
  {position: 1, name:"Mozambique", weight:1},
  {position: 1, name:"Myanmar", weight:1},
  {position: 1, name:"Nepal", weight:1},
  {position: 1, name:"Nicaragua", weight:1},
  {position: 1, name:"Panama", weight:1},
  {position: 1, name:"Papua New Guinea", weight:1},
  {position: 1, name:"Portugal", weight:1},
  {position: 1, name:"Republic of Moldova", weight:1},
  {position: 1, name:"Sierra Leone", weight:1},
  {position: 1, name:"Slovakia", weight:1},
  {position: 1, name:"Somalia", weight:1},
  {position: 1, name:"South Africa", weight:1},
  {position: 1, name:"Sri Lanka", weight:1},
  {position: 1, name:"Sudan", weight:1},
  {position: 1, name:"Uganda", weight:1},
  {position: 1, name:"Ukraine", weight:1},
  {position: 1, name:"United Republic of Tanzania", weight:1},
  {position: 1, name:"Uruguay", weight:1},
  {position: 1, name:"Uzbekistan", weight:1},
  {position: 1, name:"Yemen", weight:1},
  {position: 1, name:"Benin", weight:3},
  {position: 1, name:"Botswana", weight:3},
  {position: 1, name:"Bulgaria", weight:3},
  {position: 1, name:"Burkina Faso", weight:3},
  {position: 1, name:"Burundi", weight:3},
  {position: 1, name:"Ivoire", weight:3},
  {position: 1, name:"Cabo Verde", weight:3},
  {position: 1, name:"Cameroon", weight:3},
  {position: 1, name:"Central African Republic", weight:3},
  {position: 1, name:"Chad", weight:3},
  {position: 1, name:"Chile", weight:3},
  {position: 1, name:"Colombia", weight:3},
  {position: 1, name:"Congo", weight:3},
  {position: 1, name:"Costa Rica", weight:3},
  {position: 1, name:"Cuba", weight:3},
  {position: 1, name:"Djibouti", weight:3},
  {position: 1, name:"Dominican Republic", weight:3},
  {position: 1, name:"Eritrea", weight:3},
  {position: 1, name:"Eswatini", weight:3},
  {position: 1, name:"Ethiopia", weight:3},
  {position: 1, name:"Fiji", weight:3},
  {position: 1, name:"Gabon", weight:3},
  {position: 1, name:"Ghana", weight:3},
  {position: 1, name:"Guinea", weight:3},
  {position: 1, name:"Guyana", weight:3},
  {position: 1, name:"Haiti", weight:3},
  {position: 1, name:"Iceland", weight:3},
  {position: 1, name:"Jamaica", weight:3},
  {position: 1, name:"Kenya", weight:3},
  {position: 1, name:"Kyrgyzstan", weight:3},
  {position: 1, name:"Lebanon", weight:3},
  {position: 1, name:"Lesotho", weight:3},
  {position: 1, name:"Libya", weight:3},
  {position: 1, name:"Malawi", weight:3},
  {position: 1, name:"Malaysia", weight:3},
  {position: 1, name:"Mali", weight:3},
  {position: 1, name:"Mauritania", weight:3},
  {position: 1, name:"Mauritius", weight:3},
  {position: 1, name:"Morocco", weight:3},
  {position: 1, name:"Namibia", weight:3},
  {position: 1, name:"Niger", weight:3},
  {position: 1, name:"Nigeria", weight:3},
  {position: 1, name:"Oman", weight:3},
  {position: 1, name:"Paraguay", weight:3},
  {position: 1, name:"Peru", weight:3},
  {position: 1, name:"Rwanda", weight:3},
  {position: 1, name:"Senegal", weight:3},
  {position: 1, name:"Singapore", weight:3},
  {position: 1, name:"Suriname", weight:3},
  {position: 1, name:"Syrian Arab Republic", weight:3},
  {position: 1, name:"Togo", weight:3},
  {position: 1, name:"Tunisia", weight:3},
  {position: 1, name:"Viet Nam", weight:3},
  {position: 1, name:"Zambia", weight:3},
  {position: 1, name:"Zimbabwe", weight:3},
  {position: 1, name:"Croatia", weight:4},
  {position: 1, name:"France", weight:4},
  {position: 1, name:"Mongolia", weight:4}
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