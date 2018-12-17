import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogInService} from '../../log-in.service';
import {Subscription} from 'rxjs';
import {Global} from '../../shared/global';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private logInSubscription: Subscription;

  constructor(private logInService: LogInService) {}

  ngOnInit() {
    this.isLoggedIn =  this.logInService.isLoggedIn();
    this.logInSubscription = this.logInService.loggedIn.subscribe(
      (isLogged: boolean) => this.isLoggedIn = isLogged
    );
  }

  ngOnDestroy() {
    this.logInSubscription.unsubscribe();
  }

  logOut() {
    localStorage.removeItem(Global.SPOTIFY_USER_URI_KEY);
    location.reload();
  }
}
