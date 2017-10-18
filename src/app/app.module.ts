import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';

import {EmptypeService} from './workspace/emptype.service'
import {AuthService} from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,DataTableModule,SharedModule,HttpModule,RouterModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [EmptypeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
