import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { MapsComponent } from './maps/maps.component';


import {RouterModule} from '@angular/router';
import {systemRoutes} from './system.routes';
import { StatusoptionDirective } from './status/statusoption.directive';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(systemRoutes)
  ],
  declarations: [StatusComponent, MapsComponent, StatusoptionDirective]
})
export class SystemModule { }
