import {MinimalEntity} from "./minimal-entity.model";

export interface Entity extends MinimalEntity {
  mal_id: number;
  type: string;
}
