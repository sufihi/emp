import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class InformationService {

  constructor(private http:Http) { }
  
  //获取用户数据
  public getInformation(dataUrl:string){
  		return this.http.get(dataUrl).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
  	}
  //添加用户信息
	public postNormalUserData(dataUrl:string,user:any){
			let data = new URLSearchParams();//post提交的参数对象
			data.append('username',user.username);
			data.append('password',user.password);
			data.append('email',user.email);
			data.append('profile',user.profile);
			return this.http.post(dataUrl,data).
			map(res=>res.json()).
			catch(error=>Observable.throw(error||'server error!'));
	}
	
	
	//修改用户信息
	public updataUserData(dataUrl:string,user:any){
		let data = new URLSearchParams();//post提交的参数对象
			data.append('id',user.id);
			data.append('username',user.username);
			data.append('password',user.password);
			data.append('email',user.email);
			data.append('profile',user.profile);
			return this.http.post(dataUrl,data).
			map(res=>res.json()).
			catch(error=>Observable.throw(error||'server error!'));
	}
}
