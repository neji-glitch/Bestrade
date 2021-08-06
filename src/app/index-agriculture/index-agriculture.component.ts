import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var TradeZone: any;

@Component({
  selector: 'app-index-agriculture',
  templateUrl: './index-agriculture.component.html',
  styleUrls: ['./index-agriculture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexAgricultureComponent implements OnInit {
	
	menuList: any[] = [
		{
		title: "Home",
		//section_id: "home",
		navList: [
			{"title": "construction", "url": "/"},
			{"title": "Home Food Industry", "url": "/index-food-factory"},
			{"title": "Home Agriculture", "url": "/index-agriculture"},
			{"title": "Home Steel Plant", "url": "/index-steel-plant"},
			{"title": "Home Solar Plant", "url": "/index-solar-plant"},
		]
		},
		{title: "Services", section_id: "services",},
		{title: "About Us", section_id: "about-us",},
		{title: "Client Says", section_id: "client",},
		{title: "Projects", section_id: "projects",},
		{title: "Team", section_id: "team",},
		{title: "News", section_id: "news",},
		
	]
	
  constructor() { }

  ngOnInit(): void {
	  TradeZone.init();
  }

}
