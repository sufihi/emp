import { Component, OnInit } from '@angular/core';

import {NodeService} from '../node.service';
import {flyIn} from '../../animate/fly-in'

@Component({
  selector: 'app-jurisdiction',
  templateUrl: './jurisdiction.component.html',
  styleUrls: ['./jurisdiction.component.css'],
  animations:[flyIn]
  
})
export class JurisdictionComponent implements OnInit {
 private jurisdictionApi:Array<any>;
	private jurisdiction:any;
  constructor(private jurisdictionService: NodeService) {
  	this.jurisdiction=jurisdictionService
  }

  ngOnInit() {
  	this.jurisdiction.getData('mock-data/role-mock.json').subscribe(
				res=>{
					this.jurisdictionApi=res;
					console.log(this.jurisdictionApi)
				},
				error=>{
					console.log(error);
				}
		);
  }

}
