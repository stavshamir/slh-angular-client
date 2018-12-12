import { Component, OnInit } from '@angular/core';
import {ListeningHistoryItem} from './listening-history-item.model';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.css']
})
export class ListeningHistoryComponent implements OnInit {
  private selectedItem: ListeningHistoryItem;

  constructor() { }

  ngOnInit() {
  }

}
