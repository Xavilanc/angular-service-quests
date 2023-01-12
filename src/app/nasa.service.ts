import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Apod } from './models/Apod';

import { ApiKey } from 'src/assets/apikey';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<Apod> {
    return this.http.get<Apod>(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
  }

}