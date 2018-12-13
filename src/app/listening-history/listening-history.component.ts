import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListeningHistoryItem} from './listening-history-item.model';
import {ListeningHistoryService} from './listening-history.service';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.css'],
  providers: [ListeningHistoryService]
})
export class ListeningHistoryComponent implements OnInit, OnDestroy {
  selectedItem: ListeningHistoryItem;
  private onSelectSubscription: Subscription;

  constructor(
    private listeningHistoryService: ListeningHistoryService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();

    this.listeningHistoryService
      .getListeningHistory(0, true)
      .subscribe(
        (response: { history: ListeningHistoryItem[], totalPages: number }) => {
          this.spinner.hide();
          this.listeningHistoryService.onNewItems.next(response.history);
          this.listeningHistoryService.numberOfPages.next(response.totalPages);
          this.selectedItem = response.history[0];
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
