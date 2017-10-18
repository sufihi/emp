import { Component, OnInit } from '@angular/core';

import {NodeService} from '../node.service';
import {flyIn} from '../../animate/fly-in';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  animations:[flyIn]
})
export class RoleComponent implements OnInit {
	private RoleApi:Array<any>;
	private Role:any;
  constructor(private roleService: NodeService) {
  	this.Role=roleService
  }

  ngOnInit() {
  	this.Role.getData('mock-data/role-mock.json').subscribe(
				res=>{
					this.RoleApi=res;
					console.log(this.RoleApi)
				},
				error=>{
					console.log(error);
				}
		);
  }

}
