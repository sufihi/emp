import {RouterModule} from '@angular/router';

import {ArticleComponent} from './article/article.component';
import {DiscussComponent} from './discuss/discuss.component';


export const contentRoutes = [
			{
				path:'',
				children:[
					{
						path:'',
						component:ArticleComponent
					},
					{
						path:'article',
						component:ArticleComponent
					},
					{
						path:'discuss',
						component:DiscussComponent
					}
				]
			}
	
	
];
