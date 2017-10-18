import { Component, OnInit } from '@angular/core';

import {PostlistService} from '../postlist.service';
import {flyIn} from '../../animate/fly-in'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations:[flyIn]
})
export class ArticleComponent implements OnInit {
	//文章数据
	private PostlistApi:Array<any>;
	private Postlist:any;
  constructor(private postlistService: PostlistService) {
  	this.Postlist=postlistService
  }

  ngOnInit() {
  	this.Postlist.getPostlistData('mock-data/postlist-mock.json').subscribe(
				res=>{
					this.PostlistApi=res.items;
				},
				error=>{
					console.log(error);
				}
		);
		
  }

}
