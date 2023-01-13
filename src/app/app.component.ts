import { Component, OnInit } from '@angular/core';

import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service_quest';

  public imgOfTheDay: string = '';

  constructor (public nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(image => {
      this.imgOfTheDay = image;
    });
  }

}

