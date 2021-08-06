import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


declare var menuList: any[];

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {
	
	@Input() data : any;
	
	//pageSlug : any = this.router.url;
	
	socialList = [
		{icons: "facebook fa fa-facebook"},
		{icons: "twitter fa fa-twitter"},
		{icons: "linkedin fa fa-linkedin"},
		{icons: "instagram fa fa-instagram"},
	]
	
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
