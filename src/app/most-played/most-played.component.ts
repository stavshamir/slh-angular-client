import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogInService} from '../log-in.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {MostPlayedService} from './most-played.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-most-played',
  templateUrl: './most-played.component.html',
  providers: [MostPlayedService]
})
export class MostPlayedComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private logInSubscription: Subscription;
  private onNewItemsSubscription: Subscription;

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
    this.onNewItemsSubscription = this.mostPlayedService.onNewItems.subscribe(
      (_) => this.spinner.hide()
    );
  }

  ngOnDestroy() {
    this.logInSubscription.unsubscribe();
    this.onNewItemsSubscription.unsubscribe();
  }

}
