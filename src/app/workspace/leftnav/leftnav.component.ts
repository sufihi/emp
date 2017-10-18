import { Component, OnInit } from '@angular/core';

import {EmptypeService} from '../emptype.service';
declare var layui:any;
@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
	//获取左边数据
	private leftnavApi:Array<any>;
	private leftnav:any;
	public isCollapse: boolean = false;
	
  private out:any;
  constructor(private leftnavService:EmptypeService) {
  	this.leftnav=leftnavService
  }

  ngDoCheck(){
  	layui.use('element', function(){
				  var element = layui.element; 
		});
  }

  ngOnInit() {
  	this.leftnav.getLeftnavData('mock-data/left-nav-mock.json').subscribe(
				res=>{
					this.leftnavApi=res;
					console.log(this.leftnavApi)
				},
				error=>{
					console.log(error);
				}
		);
 
  }
  
  toggleMenuItem(event, menu){
		menu.isOpen = !menu.isOpen;
    //折叠状态下只能打开一个二级菜单层
    if (this.isCollapse) {
        let tempId = menu.id;
        this.leftnavApi.forEach(item => {
            if (item.id !== tempId) {
                item.isOpen = false;
            }
        });
    }
  }
  
  
}
