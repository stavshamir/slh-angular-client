import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Global} from './shared/global';

@Injectable()
export class LogInService {
  loggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  logIn(code: string): Observable<string> {
    const authorizeCodeUrl = Global.BACKEND_BASE_URL + '/authorize/code';
    return this.http.post(authorizeCodeUrl, code, {responseType: 'text'});
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(Global.SPOTIFY_USER_URI_KEY) !== null;
  }
}
