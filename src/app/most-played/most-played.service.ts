import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {MostPlayedItem} from './most-played-item.model';
import {Track} from '../shared/track.model';
import {Global} from '../shared/global';
import {Filter} from './most-played-query-builder/filter.model';

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

  getMostPlayed(filters?: { [key: string]: Filter }): Observable<MostPlayedItem[]> {
    const url = Global.BACKEND_BASE_URL + '/listening-history/most-played';

    const headers = new HttpHeaders()
      .set(Global.SPOTIFY_USER_URI_KEY, localStorage.getItem(Global.SPOTIFY_USER_URI_KEY));

    const params = this.getFilterParams(filters);

    return this.http
      .get(url, { params: params, headers: headers })
      .pipe(map(this.toMostPlayedItems));
  }

  private getFilterParams(filters: { [p: string]: Filter }) {
    let params = new HttpParams();

    if (filters) {
      if (filters['year'].isActive) {
        params = params.append('fromYear', filters['year'].from.toString(10));
        params = params.append('toYear', filters['year'].to.toString(10));
      }

      if (filters['month'].isActive) {
        params = params.append('fromMonth', filters['month'].from.toString(10));

        const to = filters['month'].to !== 1 ? filters['month'].to : 13;
        params = params.append('toMonth', to.toString(10));
      }

      if (filters['hour'].isActive) {
        params = params.append('fromHour', filters['hour'].from.toString(10));

        const to = filters['hour'].to !== 0 ? filters['hour'].to : 24;
        params = params.append('toHour', to.toString(10));
      }
    }

    return params;
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
