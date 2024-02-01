import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AnimeInfoComponent} from "./pages/anime-info/anime-info.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime-info/:id', component: AnimeInfoComponent},

];
