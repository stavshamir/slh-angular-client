import {Component, Input, OnInit} from '@angular/core';
import {ListeningHistoryItem} from '../listening-history-item.model';

@Component({
  selector: 'app-listening-history-detail',
  templateUrl: './listening-history-detail.component.html',
})
export class ListeningHistoryDetailComponent implements OnInit {

  @Input() item: ListeningHistoryItem;

  constructor() { }

  ngOnInit() {
  }

}
