import { Component, OnInit } from '@angular/core';
declare var TradeZone: any;
@Component({
  selector: 'app-blog-list-one',
  templateUrl: './blog-list-one.component.html',
  styleUrls: ['./blog-list-one.component.css']
})
export class BlogListOneComponent implements OnInit {
	
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
		
		pagetitle: "Blog List 1",
		bg_image: "bnr1.jpg",
		title: "Blog List 1",
	}
	
	blogList : any = [
		{
			image: "pic2.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic2.jpg",
			author: "OSCAR WESTON",
			category: "Construction",
			title: "We’ll nail your next project, because nobody wants!",
		},
		{
			image: "pic4.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic6.jpg",
			author: "RUBIN SANTRO",
			category: "Renovation",
			title: "Helping you and your house become better.",
		},
		{
			image: "pic3.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic1.jpg",
			author: "HENRY HUNTER",
			category: "Electricity",
			title: "Creating quality urban lifestyles, building stronger.",
		},
		{
			image: "pic2.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic2.jpg",
			author: "OSCAR WESTON",
			category: "Construction",
			title: "We’ll nail your next project, because nobody wants!",
		},
		{
			image: "pic6.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic3.jpg",
			author: "RUBIN SANTRO",
			category: "Renovation",
			title: "Helping you and your house become better.",
		},
		{
			image: "pic5.jpg",
			date: "10 Aug 2016",
			testimonial_image: "pic1.jpg",
			author: "HENRY HUNTER",
			category: "Electricity",
			title: "Creating quality urban lifestyles, building stronger.",
		}
	
	]

  constructor() { }

  ngOnInit(): void {
	  TradeZone.init();
  }

}
