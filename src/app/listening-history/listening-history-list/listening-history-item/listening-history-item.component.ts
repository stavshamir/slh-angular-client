import { Component, Input, OnInit } from '@angular/core';
import { ListeningHistoryItem } from '../../listening-history-item.model';

@Component({
  selector: '[app-listening-history-item]',
  templateUrl: './listening-history-item.component.html',
  styleUrls: ['./listening-history-item.component.css']
})
export class ListeningHistoryItemComponent implements OnInit {

  @Input() item: ListeningHistoryItem;

  constructor() { }

  ngOnInit() {
  }

}
