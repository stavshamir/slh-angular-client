import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListeningHistoryService} from '../listening-history.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-listening-history-navigation',
  templateUrl: './listening-history-navigation.component.html',
  styleUrls: ['./listening-history-navigation.component.css']
})
export class ListeningHistoryNavigationComponent implements OnInit, OnDestroy {
  currentPage = 0;
  numberOfPages = 0;
  private numberOfPagesSubscription: Subscription;
  
  constructor(private listeningHistoryService: ListeningHistoryService) { }

  ngOnInit() {
    this.numberOfPagesSubscription = this.listeningHistoryService.numberOfPages.subscribe(
      (totalPages: number) => {
        this.numberOfPages = totalPages;
        this.currentPage = 1;
      }
    );
  }

  goToPage(page: number) {
    this.listeningHistoryService
      .getListeningHistory(page - 1, false)
      .subscribe((o) => {
        this.listeningHistoryService.onNewItems.next(o.history);
        this.currentPage = page;
      });
  }

  ngOnDestroy(): void {
    this.numberOfPagesSubscription.unsubscribe();
  }
}
