import {ListeningHistoryItem} from './listening-history-item.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PaginatedList} from '../shared/paginated-list.model';
import {Track} from '../shared/track.model';

@Injectable()
export class ListeningHistoryService {
  onSelect = new Subject<ListeningHistoryItem>();
  numberOfPages = new Subject<number>();
  onNewItems = new Subject<ListeningHistoryItem[]>();

  constructor(private http: HttpClient) { }

  getListeningHistory(page: number, update: boolean): Observable<PaginatedList<ListeningHistoryItem>> {
    const baseUrl = 'https://spotify-listening-history.herokuapp.com/listening-history';

    let params = new HttpParams();
    params = params.append('size', '7');
    params = params.append('page', String(page));
    params = params.append('update', String(update));

    const headers = new HttpHeaders()
      .set('spotify-user-uri', localStorage.getItem('spotify-user-uri'));

    return this.http
      .get(baseUrl, { headers: headers,  params: params })
      .pipe(map(this.toListeningHistoryItems));
  }

  private toListeningHistoryItems(response: HttpResponse<ListeningHistoryItem[]>): PaginatedList<ListeningHistoryItem> {
    const history = response['content'].map(o => {
      const track: Track = {
        title: o.trackData['name'],
        artists: o.trackData['artists'],
        album: o.trackData['albumName'],
        imagePath: o.trackData['albumImageUrl']
      };
      return new ListeningHistoryItem(track, o.playedAt);
    });

    return new PaginatedList(history, response['totalPages']);
  }
}
