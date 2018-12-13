import {ListeningHistoryItem} from './listening-history-item.model';
import {Subject} from 'rxjs';

export class ListeningHistoryService {
  onSelect = new Subject<ListeningHistoryItem>();

  private listeningHistory: ListeningHistoryItem[] = [
    new ListeningHistoryItem('Mirror Mirror', ['Blind Guardian'], 'Nightfall In Middle Earth', 'https://i.scdn.co/image/50661fbc143dd5e53f5812193cda31c2fdc6e10f', new Date()),
    new ListeningHistoryItem('Bombshell', ['Chilly Gonzales', 'Jarvis Cocker'], 'Room 29', 'https://i.scdn.co/image/61b0f1f3d81323b2c86ba14bafac5d4e7a0d58e9', new Date())
  ];

  getListeningHistory(): ListeningHistoryItem[] {
    return this.listeningHistory.slice();
  }
}
