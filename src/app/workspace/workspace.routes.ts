import { RouterModule } from '@angular/router';
import {WorkspaceComponent} from './workspace.component';

import {AuthService} from '../auth.service';

export const workspaceRoutes = [
	{
		path:'',
		component:WorkspaceComponent,
		canActivate:[AuthService],
		children:[
			{
				path:'',
				redirectTo:'user'
			},
			{
				path:'user',
				loadChildren:'../user/user.module#UserModule'
			},
			{
				path:'content',
				loadChildren:'../content/content.module#ContentModule'
			},
			{
				path:'system',
				loadChildren:'../system/system.module#SystemModule'
			}
		]
	}
	
];