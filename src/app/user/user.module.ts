import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {FormsModule} from '@angular/forms';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import {TreeModule,TreeNode} from 'primeng/primeng';




import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import { ManageComponent } from './manage/manage.component';
import { RoleComponent } from './role/role.component';
import { JurisdictionComponent } from './jurisdiction/jurisdiction.component';
import { FrameworkComponent } from './framework/framework.component';

import {InformationService} from './information.service';
import {NodeService} from './node.service';
import { CreationComponent } from './creation/creation.component'

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule,RouterModule.forChild(userRoutes),DataTableModule,SharedModule,TreeModule
  ],
  declarations: [UserComponent, ManageComponent, RoleComponent, JurisdictionComponent, FrameworkComponent, CreationComponent],
  providers:[InformationService,NodeService]
})
export class UserModule { }
