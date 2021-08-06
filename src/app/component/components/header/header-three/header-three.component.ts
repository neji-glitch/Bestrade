import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare var menuList: any[];

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css']
})
export class HeaderThreeComponent implements OnInit {
	
	@Input() data : any;
	
	//pageSlug : any = this.router.url;
	

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
