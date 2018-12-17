import {Track} from '../shared/track.model';

export class ListeningHistoryItem {
  constructor(
    public track: Track,
    public playedAt: Date
  ) { }
}
