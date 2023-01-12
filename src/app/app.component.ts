import { Component, OnInit } from '@angular/core';

import { NasaService } from './nasa.service';
import { Apod } from './models/Apod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service_quest';

  public imgOfTheDay!: Apod;

  constructor (public nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(image => {
      this.imgOfTheDay = image;
    });
  }

}

