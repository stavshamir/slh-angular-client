import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LogInService} from '../../log-in.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
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
    localStorage.removeItem('spotify-user-uri');
    location.reload();
  }
}
