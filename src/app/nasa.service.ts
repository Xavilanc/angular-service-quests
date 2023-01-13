import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ApiKey } from 'src/assets/apikey';
import { Apod } from './models/Apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }


  getImageOfTheDay(): Observable<string> {
    return this.http.get<Apod>(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
    .pipe(map((response) => response.url));
  }

}