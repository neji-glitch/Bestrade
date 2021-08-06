import { Component, OnInit } from '@angular/core';
declare var TradeZone: any;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
	
	menuList: any = [
		{
		title: "Home",
		section_id: "home",
		navList: [
			{"title": "construction", "url": "/"},
			{"title": "Home Food Industry", "url": "/index-food-factory"},
			{"title": "Home Agriculture", "url": "/index-agriculture"},
			{"title": "Home Steel Plant", "url": "/index-steel-plant"},
			{"title": "Home Solar Plant", "url": "/index-solar-plant"},
		]
		},
		{
			title: "Blog", 
			navList: [
			{"title": "Blog List 1", "url": "/blog-list-one"},
			{"title": "Blog List 2", "url": "/blog-list-two"},
			{"title": "Blog Single", "url": "/blog-single"},
		]
		},
	];
	
	banner : any = {
		
		pagetitle: "Contact",
		bg_image: "bnr2.jpg",
		title: "Contact Us",
	}

  constructor() { }

  ngOnInit(): void {
	  TradeZone.init();
  }

}
