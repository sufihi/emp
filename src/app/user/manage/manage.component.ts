import { Component, OnInit } from '@angular/core';

//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {InformationService} from '../information.service';
import {flyIn} from '../../animate/fly-in';

declare var jQuery:any;
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  animations:[flyIn]
})
export class ManageComponent implements OnInit {
	private $:any;
	
	
	private InformApi:Array<any>;
	private Inform:any;
  constructor(private router:Router,private InformationData:InformationService) {
  	this.Inform=InformationData
  	this.$=jQuery;
  }

  ngOnInit() {
  	//获取数据
 		this.getDataList()
 		
  }
	creat(){
		 this.router.navigateByUrl('workspace/user/creation');
	}
	//删除用户信息
	deleteUser(id){
		this.Inform.getInformation('http://192.168.1.7/data/delNormalUser.php?id='+id).subscribe(
			res=>{
				console.log(res);
				if(res.result == 1){
					console.log("该信息已删除")
					this.getDataList();
				}else{
					alert('删除失败,请重新尝试!');
				}
			},
			error=>{
				console.log(error);
			}
		)
	}
	
	//获取用户数据信息的函数,封装好
	getDataList(){
		this.Inform.getInformation('http://192.168.1.7/data/getNormalUser.php').subscribe(
				res=>{
					this.InformApi=res;
					console.log(res)
				},
				error=>{
					console.log(error);
				}
		);
	}
	//修改用户信息,跳转到修改页面,,修改和添加共用一个页面,不同的路由
	updateUser(id){
		this.router.navigateByUrl('workspace/user/edituser/'+id)
	}
}
