import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {TreeModule,TreeNode} from 'primeng/primeng';

//declare var TreeNode:any;
@Injectable()
export class NodeService {

  constructor(private http:Http) { }
  
public getData(dataUrl:string){
		return this.http.get(dataUrl).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
	}

	getFiles() {
	        return this.http.get('mock-data/org-tree-mock.json')
	                    .toPromise()
	                    .then(res => <TreeNode[]> res.json().data);
	    }

}
