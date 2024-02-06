import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {AnimeApiService} from "./services/anime-api.service";
import {Anime, AnimeData} from "./models/anime.model";
import {TestService} from "./services/test.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'anime-list';

  anime?: Anime;

  constructor(private animeService: AnimeApiService) {

  }

  ngOnInit(): void {
    this.animeService.getAnimeFullById(1)
      .subscribe(
        anime => {
          this.anime = anime;
          console.log(anime);
          console.log(this.anime);
        },)
  }

}
