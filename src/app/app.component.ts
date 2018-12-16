import {Component, OnInit} from '@angular/core';
import {LogInService} from './log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isLoggedIn = false;
  constructor(private logInService: LogInService) { }

  ngOnInit() {
    this.isLoggedIn = this.logInService.isLoggedIn();
    this.logInService.loggedIn.subscribe(
      (loggedIn: boolean) => this.isLoggedIn = loggedIn
    );
  }
}
