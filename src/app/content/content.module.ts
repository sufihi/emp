import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { DiscussComponent } from './discuss/discuss.component';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
import {contentRoutes} from './content.routes';

import {PostlistService} from './postlist.service';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(contentRoutes),DataTableModule,SharedModule
  ],
  declarations: [ArticleComponent, DiscussComponent],
  providers:[PostlistService]
})
export class ContentModule { }
