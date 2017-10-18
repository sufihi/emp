import { Component, OnInit } from '@angular/core';


//引入守卫的插件
import {Router,ActivatedRoute,Params} from '@angular/router';
//import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models/user-model';// 引入 user的模型文件

import {InformationService} from '../information.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
  viewProviders:[InformationService]
})
export class CreationComponent implements OnInit {
	private user: User = new User();//创建新的user对象
	private userApi:any;
	private equal:boolean;
	
	private userId:number;//接收url传过来的参数
  constructor(private router:Router,private arouter:ActivatedRoute,private  userS:InformationService) {
  	this.userApi = userS;
  }

  ngOnInit() {
  	//接收修改后的参数
  	this.userId=this.arouter.params['value']['id'];
  	console.log(this.userId)
  	//获取该条需要修改的数据
  	this.userApi.getInformation('http://192.168.1.7/data/getNormalUserSingle.php?id='+this.userId).subscribe(
  		res=>{
  			console.log(res)
  			this.user= res;
  			this.user.password2 = res.password;
  		},
  		error=>{
  			console.log(error)
  		}
  	)
  	
  	
  }
	
	ngDoCheck(){
		this.equal=this.user.password==this.user.password2
	}
	save(){
		if(this.userId != undefined){
			this.userApi.updataUserData(' http://192.168.1.7/data/updateNormalUser.php',this.user).subscribe(
				res=>{
					if(res.result>0){
						console.log("该数据已修改!")
						this.router.navigateByUrl('workspace/user/manage');
					}
				},
				error=>{
					console.log(error)
				}
			)
			
		}else{
				this.userApi.postNormalUserData('http://192.168.1.7/data/addNormalUser.php',this.user).subscribe(
		  		res=>{
		  			if(res.result >0){
		  				alert('新数据已添加');
		  				this.router.navigateByUrl('workspace/user/manage');
		  			}
		  		},
		  		error=>{
		  			console.log(error);
		  		}
		  )
		}
		
	}
	


}
