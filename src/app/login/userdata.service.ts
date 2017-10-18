import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserdataService {

  constructor(private http:Http) { }
//获取登录的数据
  	public getUserData(dataUrl:string){
  		return this.http.get(dataUrl).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
  	}
  	
//使用post的方式获取后台登录成功时的信息
		public postUserData(dataUrl:string,myusername:string,mypassword:string){
			//post提交的参数对象
			let data = new URLSearchParams();
			data.append('username',myusername);
			data.append('password',mypassword);
			return this.http.post(dataUrl,data).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
			
		}
	
}
