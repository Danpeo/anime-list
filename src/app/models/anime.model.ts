import {Image} from "./images/image.model";
import {Trailer} from "./trailer.model";
import {Title} from "./title.model";
import {Aired} from "./aired.model";
import {Entity} from "./entity.model";
import {Broadcast} from "./broadcast.model";
import {Theme} from "./theme.model";
import {MinimalEntity} from "./minimal-entity.model";

export interface AnimeData {
  data: Anime;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Image
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  genres: Entity[];
  explicit_genres: Entity[];
  themes: Entity[];
  demographics: Entity[];
  theme: Theme;
  external: MinimalEntity[];
  streaming: MinimalEntity[];
}
