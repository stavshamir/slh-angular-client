import {ListeningHistoryItem} from './listening-history-item.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ListeningHistoryService {
  onSelect = new Subject<ListeningHistoryItem>();

  constructor(private http: HttpClient) { }

  getListeningHistory(): Observable<ListeningHistoryItem[]> {
    const baseUrl = 'https://spotify-listening-history.herokuapp.com/listening-history/get';

    let params = new HttpParams();
    params = params.append('size', '7');
    params = params.append('page', '0');
    params = params.append('update', 'true');

    return this.http
      .get(baseUrl, { params: params, withCredentials: true })
      .pipe(map(this.toListeningHistoryItems));
  }

  private toListeningHistoryItems(response: HttpResponse<ListeningHistoryItem[]>): ListeningHistoryItem[] {
    return response['content'].map((o) => {
      const data = o.trackData;
      return new ListeningHistoryItem(
        data['name'], data['artists'], data['albumName'], data['albumImageUrl'], o.playedAt
      );
    });
  }
}
