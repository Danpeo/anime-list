import { Component } from '@angular/core';
import {Anime} from "../../models/anime.model";
import {AnimeService} from "../../services/anime.service";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {ContainerComponent} from "../../components/primitives/container/container.component";
import {BorderBottomComponent} from "../../components/primitives/border-bottom/border-bottom.component";

@Component({
  selector: 'app-anime-info',
  standalone: true,
  imports: [
    NgIf,
    ContainerComponent,
    BorderBottomComponent
  ],
  templateUrl: './anime-info.component.html',
  styleUrl: './anime-info.component.scss'
})
export class AnimeInfoComponent {
  anime?: Anime;
  animeId: number = 1;

  constructor(private readonly animeService: AnimeService, private readonly route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.getAnimeId();

    this.animeService.getAnimeFullById(this.animeId)
      .subscribe({
        next: (anime) => {
          this.anime = anime;
        }
      })
  }

  private getAnimeId(): void {
    this.route.params.subscribe(params => this.animeId = params['id']);
  }
}
