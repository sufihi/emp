//使用自定义指令来实现对echarts的调用

import { Directive,Input,OnInit,ElementRef } from '@angular/core';
//引入echarts,,以对象形式
import * as echarts from 'echarts';

@Directive({
//selector: '[appStatusoption]'
  selector:'echart'
})
export class StatusoptionDirective implements OnInit{
	@Input('optionType') optionType:any;
  constructor(private el:ElementRef) { }
  
  public ngOnInit():void{
  	//这是初始化图形的
  	echarts.init(this.el.nativeElement).setOption(this.optionType);
  }

}
