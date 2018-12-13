import {ListeningHistoryItem} from './listening-history-item.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ListeningHistoryService {
  onSelect = new Subject<ListeningHistoryItem>();

  private listeningHistory: ListeningHistoryItem[] = [
    new ListeningHistoryItem('Mirror Mirror', ['Blind Guardian'], 'Nightfall In Middle Earth', 'https://i.scdn.co/image/50661fbc143dd5e53f5812193cda31c2fdc6e10f', new Date()),
    new ListeningHistoryItem('Bombshell', ['Chilly Gonzales', 'Jarvis Cocker'], 'Room 29', 'https://i.scdn.co/image/61b0f1f3d81323b2c86ba14bafac5d4e7a0d58e9', new Date())
  ];

  constructor(private http: HttpClient) { }

  getListeningHistory(): Observable<ListeningHistoryItem[]> {
    // return this.listeningHistory.slice();
    const baseUrl = 'https://spotify-listening-history.herokuapp.com/listening-history/get';
    return this.http
      .get(baseUrl + '?size=5&page=0&update=false')
      .pipe(map((response: HttpResponse<ListeningHistoryItem[]>) => response.body));
  }
}
