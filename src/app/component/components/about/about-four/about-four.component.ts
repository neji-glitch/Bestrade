import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-four',
  templateUrl: './about-four.component.html',
  styleUrls: ['./about-four.component.css']
})
export class AboutFourComponent implements OnInit {
	
		subtitle= "Qui sommes nous";
		title= "A propos de Bestrade";
		description= "Plateforme  collaborative dédiée aux professionnels du commerce international";

		itemList: any[] = [
		{list: "Centraliser les dossiers de vos opérations de commerce international dans un espace numérique de travail"},
		{list: "Créer, Organiser, Indexer, Enregistrer, Sauvegarder et Archiver vos dossiers du commerce international"},
		{list: "Gérer un tableau de bord de suivi de vos différentes opérations d’importation et d’exportation"},
		]

  constructor() { }

  ngOnInit(): void {
  }

}
