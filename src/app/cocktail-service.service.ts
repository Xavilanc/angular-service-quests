import { Injectable } from '@angular/core';
import { Cocktail } from './models/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails: Cocktail[] = [
    {
      name: 'mistral',
      price: 15,
      image: 'https://www.liquor.com/thmb/f9kQdriaiMZWRylBrRvS4i9IpPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-berry-delicious-720x720-primary-1a5eae4fde84429a98381986abfe2572.jpg'
    },
    {
      name: 'monaco',
      price: 25,
      image: 'https://www.liquor.com/thmb/f9kQdriaiMZWRylBrRvS4i9IpPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-berry-delicious-720x720-primary-1a5eae4fde84429a98381986abfe2572.jpg'
      },
  ];

  constructor() { }

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }

}

