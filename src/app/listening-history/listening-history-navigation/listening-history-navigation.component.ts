import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-history-navigation',
  templateUrl: './listening-history-navigation.component.html',
  styleUrls: ['./listening-history-navigation.component.css']
})
export class ListeningHistoryNavigationComponent implements OnInit {

  currentPage: number;
  numberOfPages: number;

  constructor() { }

  ngOnInit() {
    this.currentPage = 1;
    this.numberOfPages = 231;
  }

}
