import {Entity} from "./entity.model";

export interface Relation {
  relation: string;
  entry: Entity[];
}
