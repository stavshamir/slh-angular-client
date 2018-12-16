import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class LogInService {
  loggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  logIn(code: string): Observable<string> {
    const authorizeCodeUrl = 'https://spotify-listening-history.herokuapp.com/authorize/code';
    return this.http.post(authorizeCodeUrl, code, {responseType: 'text'});
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('spotify-user-uri') !== null;
  }
}
