import { Component, OnInit } from '@angular/core';
//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
	logout(){
	  	sessionStorage.removeItem('userName');
	  	sessionStorage.removeItem('passwd');
	  	this.router.navigateByUrl('login');
	  	alert('您已经成功退出');
	  	
	}
}
