import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListeningHistoryItem} from './listening-history-item.model';
import {ListeningHistoryService} from './listening-history.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.css'],
  providers: [ListeningHistoryService]
})
export class ListeningHistoryComponent implements OnInit, OnDestroy {
  private selectedItem: ListeningHistoryItem;
  private onSelectSubscription: Subscription;

  constructor(private listeningHistoryService: ListeningHistoryService) { }

  ngOnInit() {
    this.selectedItem = this.listeningHistoryService.getListeningHistory()[0];
    this.onSelectSubscription = this.listeningHistoryService.onSelect.subscribe(
      (item: ListeningHistoryItem) => this.selectedItem = item
    );
  }

  ngOnDestroy() {
    this.onSelectSubscription.unsubscribe();
  }
}
