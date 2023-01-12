import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../models/Cocktail';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit {

  cocktails!: Cocktail[];

  constructor(public cocktailService: CocktailServiceService) { }

  ngOnInit(): void {
 this.cocktails = this.cocktailService.getCocktails();
  }

}
