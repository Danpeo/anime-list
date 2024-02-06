import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime, AnimeData} from "../models/anime.model";
import {environment} from "../../environments/environment.development";
import {catchError, map, Observable, throwError} from "rxjs";
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getAnimeFullById(id: number): Observable<Anime> {

    const url = `${environment.jikanApi}/anime/${id}/full`;

    return this.httpClient.get<AnimeData>(url)
      .pipe(
        map(x => x.data),
        catchError(err => {
          return Service.handleError(err)
        })
      );
  }
}
