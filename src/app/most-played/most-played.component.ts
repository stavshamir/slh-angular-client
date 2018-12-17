import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogInService} from '../log-in.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {MostPlayedService} from './most-played.service';
import {MostPlayedItem} from './most-played-item.model';
import {PaginatedList} from '../shared/paginated-list.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-most-played',
  templateUrl: './most-played.component.html',
  styleUrls: ['./most-played.component.css'],
  providers: [MostPlayedService]
})
export class MostPlayedComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private logInSubscription: Subscription;

  constructor(
    private mostPlayedService: MostPlayedService,
    private logInService: LogInService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.logInService.isLoggedIn();
    this.logInSubscription = this.logInService.loggedIn.subscribe(
      (loggedIn: boolean) => this.isLoggedIn = loggedIn
    );

    if (!this.isLoggedIn) {
      return;
    }

    this.spinner.show();

    this.mostPlayedService.getMostPlayed().subscribe(
      (response: PaginatedList<MostPlayedItem>) => {
        this.spinner.hide();
        this.mostPlayedService.onNewItems.next({
          items: response.items,
          currentPage: 0,
        });
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.logInSubscription.unsubscribe();
  }

}
