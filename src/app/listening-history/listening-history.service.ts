import {ListeningHistoryItem} from './listening-history-item.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ListeningHistoryService {
  onSelect = new Subject<ListeningHistoryItem>();
  numberOfPages = new Subject<number>();
  onNewItems = new Subject<ListeningHistoryItem[]>();

  constructor(private http: HttpClient) { }

  getListeningHistory(page: number, update: boolean): Observable<{ history: ListeningHistoryItem[], totalPages: number }> {
    const baseUrl = 'https://spotify-listening-history.herokuapp.com/listening-history/get';

    let params = new HttpParams();
    params = params.append('size', '7');
    params = params.append('page', String(page));
    params = params.append('update', String(update));

    return this.http
      .get(baseUrl, { params: params, withCredentials: true })
      .pipe(map(this.toListeningHistoryItems));
  }

  private toListeningHistoryItems(response: HttpResponse<ListeningHistoryItem[]>):
    { history: ListeningHistoryItem[], totalPages: number } {
    const history = response['content'].map((o) => {
      const data = o.trackData;
      return new ListeningHistoryItem(
        data['name'], data['artists'], data['albumName'], data['albumImageUrl'], o.playedAt
      );
    });

    return {
      history: history,
      totalPages: response['totalPages']
    };
  }
}
