import {RouterModule} from '@angular/router';

import {StatusComponent} from './status/status.component';
import {MapsComponent} from './maps/maps.component';


export const systemRoutes = [
			{
				path:'',
				children:[
					{
						path:'',
						component:StatusComponent
					},
					{
						path:'status',
						component:StatusComponent
					},
					{
						path:'maps',
						component:MapsComponent
					}
				]
			}
	
	
];
