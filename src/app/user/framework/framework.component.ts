import { Component, OnInit } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {NodeService} from '../node.service';
import {TreeModule,TreeNode} from 'primeng/primeng';
import {flyIn} from '../../animate/fly-in'

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
  animations:[flyIn]
})
export class FrameworkComponent implements OnInit {
	private NodeApi:Array<any>;
	private Node:any;
	
	//树形菜单
  files: TreeNode[];
  private filesName:string;
  private filesCode:string;
  
  constructor(private router:Router,private nodeService: NodeService) {
			this.Node=nodeService;
  }

  ngOnInit() {
  	 	this.Node.getFiles().then(files => {
  	 	this.files=files;
  	 	console.log(this.files)
  	 });
  }
  
  nodeSelect(e){
  	console.log(e)
  	this.filesName=e.node.label;
  	this.filesCode=e.node.data;
  }

}







//	this.Node.getFiles('mock-data/org-tree-mock.json').subscribe(
//				res=>{
//					console.log(res.data)
//				},
//				error=>{
//					console.log(error);
//				}
//		);