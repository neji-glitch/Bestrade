import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-three',
  templateUrl: './about-three.component.html',
  styleUrls: ['./about-three.component.css']
})
export class AboutThreeComponent implements OnInit {
	
	subtitle= "Entrez dans le monde du business !";
	title= "Notre mission";
	description= "Plateforme  collaborative dédiée aux professionnels du commerce international";
	
	itemList: any[] = [
		{list: "Centraliser les dossiers de vos opérations de commerce international dans un espace numérique de travail"},
		{list: "Créer, Organiser, Indexer, Enregistrer, Sauvegarder et Archiver vos dossiers du commerce international"},
		{list: "Gérer un tableau de bord de suivi de vos différentes opérations d’importation et d’exportation"},
		{list: "Gérer vos listes de partenaires et prestataires"},
		{list: "Fluidifier les échanges en interne à l’entreprise"},
		{list: "Fluidifier les échanges externes avec les partenaires et prestataires"},
		{list: "Apporter plus de transparence sur les procédures entre opérateurs privés du commerce international"},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
