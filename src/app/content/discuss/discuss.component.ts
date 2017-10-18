import { Component, OnInit } from '@angular/core';
import {PostlistService} from '../postlist.service';
import {flyIn} from '../../animate/fly-in'

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css'],
   animations:[flyIn]
})
export class DiscussComponent implements OnInit {
//评论数据
	private commentApi:Array<any>;
	private Postlist:any;
  constructor(private postlistService: PostlistService) {
  	this.Postlist=postlistService
  }

  ngOnInit() {
  	this.Postlist.getPostlistData('mock-data/comment-mock.json').subscribe(
				res=>{
					this.commentApi=res.items;
					console.log(this.commentApi)
				},
				error=>{
					console.log(error);
				}
		);
  }

}
