import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './models/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('../assets/data.json')
  }

}

