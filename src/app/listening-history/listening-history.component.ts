import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListeningHistoryItem} from './listening-history-item.model';
import {ListeningHistoryService} from './listening-history.service';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {LogInService} from '../log-in.service';
import {PaginatedList} from '../shared/paginated-list.model';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.css'],
  providers: [ListeningHistoryService]
})
export class ListeningHistoryComponent implements OnInit, OnDestroy {
  selectedItem: ListeningHistoryItem;
  isLoggedIn = false;
  private onSelectSubscription: Subscription;

  constructor(
    private listeningHistoryService: ListeningHistoryService,
    private logInService: LogInService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.logInService.isLoggedIn();
    this.logInService.loggedIn.subscribe(
      (loggedIn: boolean) => this.isLoggedIn = loggedIn
    );

    if (!this.isLoggedIn) {
      return;
    }

    this.spinner.show();

    this.listeningHistoryService
      .getListeningHistory(0, true)
      .subscribe(
        (response: PaginatedList<ListeningHistoryItem>) => {
          this.spinner.hide();
          this.listeningHistoryService.onNewItems.next(response.items);
          this.listeningHistoryService.numberOfPages.next(response.totalPages);
          this.selectedItem = response.items[0];
        },
        (error) => console.log(error)
      );

    this.onSelectSubscription = this.listeningHistoryService.onSelect.subscribe(
      (item: ListeningHistoryItem) => this.selectedItem = item
    );
  }

  ngOnDestroy() {
    this.onSelectSubscription.unsubscribe();
  }
}
