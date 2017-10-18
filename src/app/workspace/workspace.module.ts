import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {workspaceRoutes} from './workspace.routes';

import {AuthService} from '../auth.service';
import {EmptypeService} from './emptype.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule,RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [WorkspaceComponent, HeaderComponent, LeftnavComponent],
  providers:[AuthService,EmptypeService]
})
export class WorkspaceModule { }
