import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class EmptypeService {

  constructor(private http:Http) { }
  
  //获取左边数据信息
  public getLeftnavData(dataUrl:string){
		return this.http.get(dataUrl).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
	}

}
