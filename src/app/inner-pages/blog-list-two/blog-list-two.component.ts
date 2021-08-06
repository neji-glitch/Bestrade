import { Component, OnInit } from '@angular/core';
declare var TradeZone: any;
@Component({
  selector: 'app-blog-list-two',
  templateUrl: './blog-list-two.component.html',
  styleUrls: ['./blog-list-two.component.css']
})
export class BlogListTwoComponent implements OnInit {
	
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
		
		pagetitle: "Blog List 2",
		bg_image: "bnr2.jpg",
		title: "Blog List 2",
	}
	
	blogList : any = [
		{
			image: "pic7.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Construction",
			title: "We’ll nail your next project, because nobody wants!",
		},
		{
			image: "pic8.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Renovation",
			title: "Helping you and your house become better.",
		},
		{
			image: "pic9.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Electricity",
			title: "Creating quality urban lifestyles, building stronger.",
		},
		{
			image: "pic10.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Construction",
			title: "We’ll nail your next project, because nobody wants!",
		},
		{
			image: "pic11.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Renovation",
			title: "Helping you and your house become better.",
		},
		{
			image: "pic12.jpg",
			date: "10 Aug 2016",
			comment: "5K",
			category: "Electricity",
			title: "Creating quality urban lifestyles, building stronger.",
		},
		
	]

  constructor() { }

  ngOnInit(): void {
	  TradeZone.init();
  }

}
