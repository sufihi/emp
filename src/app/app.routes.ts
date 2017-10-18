import { RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:'login',
		component:LoginComponent
	},
	//可以不用import
	{
		path:'workspace',
		loadChildren:'./workspace/workspace.module#WorkspaceModule'
	}
]
