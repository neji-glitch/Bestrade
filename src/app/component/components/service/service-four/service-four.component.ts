import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-four',
  templateUrl: './service-four.component.html',
  styleUrls: ['./service-four.component.css']
})
export class ServiceFourComponent implements OnInit {
	
	serviceList: any[] = [
		{
			image: "pic1.jpg",
			icon: "icon1.png",
			title: "Espace numérique du travail",
		},
		{
			image: "pic1.jpg",
			icon: "icon2.png",
			title: "Platform de mise en relation",
		},
		{
			image: "pic3.jpg",
			icon: "icon3.png",
			title: "Espace de communication",
		},
		{
			image: "pic4.jpg",
			icon: "icon4.png",
			title: "Gestion Electronique des documents",
		},
		{
			image: "pic5.jpg",
			icon: "icon5.png",
			title: "Pipe & Pipeline",
		},
		{
			image: "pic2.jpg",
			icon: "icon6.png",
			title: "Support technique et logistique",
		},
	]
	

  constructor() { }

  ngOnInit(): void {
  }

}
