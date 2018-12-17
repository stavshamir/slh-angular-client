import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LogInService} from '../log-in.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Global} from '../shared/global';

@Component({
  selector: 'app-auth-callback',
  template: '<ngx-spinner bdColor="darkgray" size="large" type="ball-spin-clockwise"></ngx-spinner>',
})
export class AuthCallbackComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logInService: LogInService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();

    const code = this.route.snapshot.queryParams['code'];
    this.logInService.logIn(code).subscribe((response: string) => {
      localStorage.setItem(Global.SPOTIFY_USER_URI_KEY, response);
      this.logInService.loggedIn.next(true);
      this.router.navigate(['/']);
    });
  }
}
