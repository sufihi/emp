//引入动画插件
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

export const flyIn = trigger('flyIn',[
	state('in',style({transform:'translateX(100%)'})),
	transition('void=>*',[
		animate(400,keyframes([
			style({transform:'translateX(100%)',opacity:0}),
			style({transform:'translateX(0)',opacity:1})
		]))
	])
])
