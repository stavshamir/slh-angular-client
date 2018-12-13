import {Component, OnDestroy, OnInit} from '@angular/core';
import { ListeningHistoryItem } from '../listening-history-item.model';
import {ListeningHistoryService} from '../listening-history.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-listening-history-list',
  templateUrl: './listening-history-list.component.html',
  styleUrls: ['./listening-history-list.component.css']
})
export class ListeningHistoryListComponent implements OnInit, OnDestroy {
  listeningHistory: ListeningHistoryItem[];
  private onNewItemsSubscription: Subscription;

  constructor(private listeningHistoryService: ListeningHistoryService) { }

  ngOnInit() {
    this.onNewItemsSubscription = this.listeningHistoryService.onNewItems.subscribe(
      (history: ListeningHistoryItem[]) => this.listeningHistory = history
    );
  }

  ngOnDestroy(): void {
    this.onNewItemsSubscription.unsubscribe();
  }
}
