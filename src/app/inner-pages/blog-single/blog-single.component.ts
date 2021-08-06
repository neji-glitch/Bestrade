import { Component, OnInit } from '@angular/core';
declare var TradeZone: any;
@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {
	
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
		
		pagetitle: "Blog Single",
		bg_image: "bnr2.jpg",
		title: "Blog Single",
	}

  constructor() { }

  ngOnInit(): void {
	  TradeZone.init();
  }

}
