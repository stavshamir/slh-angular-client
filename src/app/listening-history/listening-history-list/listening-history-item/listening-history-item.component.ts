import { Component, Input } from '@angular/core';
import { ListeningHistoryItem } from '../../listening-history-item.model';
import {ListeningHistoryService} from '../../listening-history.service';

@Component({
  selector: 'app-listening-history-item',
  templateUrl: './listening-history-item.component.html',
})
export class ListeningHistoryItemComponent {
  @Input() item: ListeningHistoryItem;

  constructor(private listeningHistoryService: ListeningHistoryService) { }

  onSelect() {
    this.listeningHistoryService
      .onSelect
      .next(this.item);
  }
}
