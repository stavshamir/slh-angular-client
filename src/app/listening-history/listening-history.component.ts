import { Component, OnInit } from '@angular/core';
import {ListeningHistoryItem} from './listening-history-item.model';
import {ListeningHistoryService} from './listening-history.service';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.css'],
  providers: [ListeningHistoryService]
})
export class ListeningHistoryComponent implements OnInit {
  private selectedItem: ListeningHistoryItem;

  constructor(private listeningHistoryService: ListeningHistoryService) { }

  ngOnInit() {
    this.selectedItem = this.listeningHistoryService.getListeningHistory()[0];
    this.listeningHistoryService.onSelect.subscribe(
      (item: ListeningHistoryItem) => this.selectedItem = item
    );
  }
}
