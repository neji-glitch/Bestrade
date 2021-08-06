import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-one',
  templateUrl: './team-one.component.html',
  styleUrls: ['./team-one.component.css']
})
export class TeamOneComponent implements OnInit {
	
	subtitle = "OUR EXPERTS";
	title = "Meet The Team";
	
	team : any = [
		{
			image: "pic7.jpg",
			title: "Nashid Martines",
			sociallist: [
				{icon: "<a class='site-button fa fa-facebook' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-twitter' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-linkedin' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-pinterest' href='javascript:void(0);'></a>"},
			]
		},
		{
			image: "pic4.jpg",
			title: "Konne Backfield",
			sociallist: [
				{icon: "<a class='site-button fa fa-facebook' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-twitter' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-linkedin' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-pinterest' href='javascript:void(0);'></a>"},
			]
		},
		{
			image: "pic5.jpg",
			title: "Hackson Willingham",
			sociallist: [
				{icon: "<a class='site-button fa fa-facebook' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-twitter' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-linkedin' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-pinterest' href='javascript:void(0);'></a>"},
			]
		},
		{
			image: "pic6.jpg",
			title: "Konne Backfield",
			sociallist: [
				{icon: "<a class='site-button fa fa-facebook' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-twitter' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-linkedin' href='javascript:void(0);'></a>"},
				{icon: "<a class='site-button fa fa-pinterest' href='javascript:void(0);'></a>"},
			]
		}
	]

  constructor() { }

  ngOnInit(): void {
  }

}
