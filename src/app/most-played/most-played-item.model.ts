import {Track} from '../shared/track.model';

export class MostPlayedItem {
  constructor(
    public track: Track,
    public count: number
  ) { }
}
