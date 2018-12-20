import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {MostPlayedItem} from './most-played-item.model';
import {Track} from '../shared/track.model';
import {Global} from '../shared/global';

@Injectable()
export class MostPlayedService {
  readonly pageSize = 5;

  onNewItems = new Subject<{items: MostPlayedItem[], currentPage: number}>();
  onSelect = new Subject<{item: MostPlayedItem, index: number}>();
  onFilterRemoved = new Subject<string>();

  mostPlayedItems: MostPlayedItem[];

  constructor(private http: HttpClient) {
    this.getMostPlayed().subscribe(
      (items: MostPlayedItem[]) => {
        this.mostPlayedItems = items;

        this.onNewItems.next({
          items: this.mostPlayedItems.slice(0, this.pageSize),
          currentPage: 0
        });
      }
    );
  }

  getMostPlayed(): Observable<MostPlayedItem[]> {
    const url = Global.BACKEND_BASE_URL + '/listening-history/most-played';

    const headers = new HttpHeaders()
      .set(Global.SPOTIFY_USER_URI_KEY, localStorage.getItem(Global.SPOTIFY_USER_URI_KEY));

    return this.http
      .get(url, { headers: headers })
      .pipe(map(this.toMostPlayedItems));
  }

  private toMostPlayedItems(response: { trackData: any, count: number }[]): MostPlayedItem[] {
    return response.map(o => {
      const track: Track = {
        title: o.trackData['name'],
        artists: o.trackData['artists'],
        album: o.trackData['albumName'],
        imagePath: o.trackData['albumImageUrl']
      };
      return new MostPlayedItem(track, o.count);
    });
  }
}
