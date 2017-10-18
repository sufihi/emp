import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
	private scrollHeight:any;
  constructor() { }

  ngOnInit() {
  	this.scrollHeight=window.screen.height-190+"px";
  	console.log(this.scrollHeight)
  }

}
