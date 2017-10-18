import { Component, OnInit } from '@angular/core';

//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {UserdataService} from './userdata.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders:[UserdataService]//引入服务,这样就不用在跟模块的引入了
})
export class LoginComponent implements OnInit {
	//存储登录信息
	private userName:any;
	private passwd:any;
	private mistake:string;
	
	private scrollHeight:any;

private userApi:any;
  constructor(private router:Router,private user:UserdataService) {
  	this.userApi = user;
  }

  ngOnInit() {
  	this.scrollHeight=window.screen.height+"px";
  	console.log(this.scrollHeight)
  }
	ngDoCheck(){
			if(this.userName==''){
				this.mistake=''
			}
	}
	login(){
		//真实获取登录信息验证
		var store=window.sessionStorage;
		this.userApi.postUserData('http://192.168.1.7/data/getUser.php',this.userName,this.passwd).subscribe(
			res=>{
				if(res==null){
					this.mistake='用户名或密码错误,请重新输入!'
				}else{
						if(res.username == this.userName &&res.password == this.passwd){
							alert('登录成功');
							store.setItem('userName',this.userName);
					    store.setItem('passwd',this.passwd);
					    this.router.navigateByUrl('workspace');
						}
				}
			},
			
			error=>{
			console.log(error);
			}
		);	
		
		
		
		//模拟获取登录数据验证
//		var store=window.sessionStorage;
//		this.userApi.getUserData('mock-data/user-login-mock.json').subscribe(
//			res=>{
//				if(res.username == this.userName &&res.password == this.passwd){
//						alert('登录成功');
//						store.setItem('userName',this.userName);
//				    store.setItem('passwd',this.passwd);
//				    this.router.navigateByUrl('workspace');
//				}else{
//						this.mistake='用户名或密码错误,请重新输入!'
//				}
//			},
//			error=>{
//			console.log(error);
//			}
//		);
		
		
	}
}




//				var store=window.sessionStorage;
//				if(this.userName==='sufihi' && this.passwd==='12345678'){
//					if(window.sessionStorage){
//						store.setItem('userName',this.userName);
//				    store.setItem('passwd',this.passwd);
//				    this.router.navigateByUrl('workspace');
//					}
//				}else{
//						this.mistake='用户名或密码错误,请重新输入!'
//				}