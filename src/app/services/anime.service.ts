import {Injectable} from '@angular/core';
import {Anime} from "../models/anime.model";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() {
  }

  getAiringDateTo(anime: Anime): string {

    let year = anime.aired.prop.to.year;

    return year !== null ? year.toString() : '...';
  }

  getColorBasedOnScore(anime: Anime) {
    const score = anime.score;
    return {
      'dv-best-score': score >= 9,
      'dv-great-score': score >= 8 && score < 9,
      'dv-good-score': score >= 6 && score < 8,
      'dv-avg-score': score >= 5 && score < 6,
      'dv-bad-score': score < 5
    };
  }

  getWordExpressionBasedOnScore(anime: Anime) {
    const score = anime.score;

    return {
      'Great': score >= 8,
      'Good': score >= 6 && score < 8,
      'Average': score >= 5 && score < 6,
      'Bad': score < 5
    }
  }
}
