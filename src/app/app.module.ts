import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { IframeComponent } from './iframe/iframe.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Route} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const ROUTES: Route[] = [
  {path: '', redirectTo:'welcome', pathMatch: 'full'}, 
  {path: 'welcome',component: HelloComponent},
  {path: 'classic', children: [
    {path: '**', component: IframeComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,  HelloComponent, IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
