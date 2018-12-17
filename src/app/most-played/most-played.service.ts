import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {MostPlayedItem} from './most-played-item.model';
import {PaginatedList} from '../shared/paginated-list.model';
import {Track} from '../shared/track.model';

@Injectable()
export class MostPlayedService {
  readonly pageSize = 5;
  onNewItems = new Subject<{items: MostPlayedItem[], currentPage: number}>();

  constructor(private http: HttpClient) { }

  getMostPlayed(): Observable<PaginatedList<MostPlayedItem>> {
    const baseUrl = 'https://spotify-listening-history.herokuapp.com/listening-history/most-played';

    let params = new HttpParams();
    params = params.append('size', this.pageSize.toString());

    const headers = new HttpHeaders()
      .set('spotify-user-uri', localStorage.getItem('spotify-user-uri'));

    return this.http
      .get(baseUrl, { headers: headers,  params: params })
      .pipe(map(this.toMostPlayedItems));
  }

  private toMostPlayedItems(response: HttpResponse<MostPlayedItem[]>): PaginatedList<MostPlayedItem> {
    const mostPlayed = response['content'].map(o => {
      const track: Track = {
        title: o.trackData['name'],
        artists: o.trackData['artists'],
        album: o.trackData['albumName'],
        imagePath: o.trackData['albumImageUrl']
      };
      return new MostPlayedItem(track, o.count);
    });

    return new PaginatedList(mostPlayed, response['totalPages']);
  }
}
