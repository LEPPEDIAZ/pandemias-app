import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { DialogContentExample } from './dialog-content-example';
import { IframeComponent } from './iframe/iframe.component';
import {DialogContentExampleDialog} from './dialog-content-example';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Route} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';





const ROUTES: Route[] = [
  {path: '', redirectTo:'welcome', pathMatch: 'full'}, 
  {path: 'welcome',component: HelloComponent},
  {path: 'classic', children: [
    {path: '**', component: IframeComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,  HelloComponent, IframeComponent, DialogContentExample, DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
