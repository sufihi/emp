import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

import {ManageComponent} from './manage/manage.component';
import {CreationComponent} from './creation/creation.component';


import {RoleComponent} from './role/role.component';
import {JurisdictionComponent} from './jurisdiction/jurisdiction.component';
import {FrameworkComponent} from './framework/framework.component';



export const userRoutes = [
	{
		path:'',
		children:[
			{
				path:'',
				component:ManageComponent
			},
			{
				path:'framework',
				component:FrameworkComponent
			},
			{
				path:'manage',
				component:ManageComponent
			},
			{
				path:'role',
				component:RoleComponent
			},
			{
				path:'jurisdiction',
				component:JurisdictionComponent
			},
			{
				path:'creation',
				component:CreationComponent
			},
			{
				path:'edituser/:id',//修改的路由
				component:CreationComponent
			}
		]
	}
	
	
	
];
