import { Injectable } from '@angular/core';
//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService {
	private user:string;
	private passwords:string;
  constructor(private router:Router) { }
  
  //在这里定义守卫内容
  canActivate():boolean{
	console.log('路由守卫到这里');//检测路由守卫是否执行
	this.user = sessionStorage.getItem('userName');
	this.passwords = sessionStorage.getItem('passwd');
	if(this.user == 'admin'&& this.passwords=='12345678' ){
		return true;
	}else{
		this.router.navigateByUrl('login');
		return false;
		
	}
  }
}
