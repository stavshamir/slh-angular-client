import { Component, OnInit } from '@angular/core';
import { ListeningHistoryItem } from '../listening-history-item.model';
import {ListeningHistoryService} from '../listening-history.service';

@Component({
  selector: 'app-listening-history-list',
  templateUrl: './listening-history-list.component.html',
  styleUrls: ['./listening-history-list.component.css']
})
export class ListeningHistoryListComponent implements OnInit {
  listeningHistory: ListeningHistoryItem[];

  constructor(private listeningHistoryService: ListeningHistoryService) { }

  ngOnInit() {
    this.listeningHistoryService
      .getListeningHistory()
      .subscribe(
        (history: ListeningHistoryItem[]) => this.listeningHistory = history,
        (error) => console.log(error)
      );
  }
}
