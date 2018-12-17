import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';
import { ListeningHistoryItemComponent } from './listening-history/listening-history-list/listening-history-item/listening-history-item.component';
import { ListeningHistoryListComponent } from './listening-history/listening-history-list/listening-history-list.component';
import { ListeningHistoryNavigationComponent } from './listening-history/listening-history-navigation/listening-history-navigation.component';
import { ListeningHistoryDetailComponent } from './listening-history/listening-history-detail/listening-history-detail.component';
import {LogInService} from './log-in.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LogInComponent } from './header/log-in/log-in.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { MostPlayedComponent } from './most-played/most-played.component';
import { MostPlayedListComponent } from './most-played/most-played-list/most-played-list.component';
import { MostPlayedItemComponent } from './most-played/most-played-list/most-played-item/most-played-item.component';
import { MostPlayedDetailComponent } from './most-played/most-played-detail/most-played-detail.component';

const appRoutes: Routes = [
  { path: '', component: ListeningHistoryComponent },
  { path: 'log-in', component: AuthCallbackComponent},
  { path: 'listening-history', component: ListeningHistoryComponent },
  { path: 'most-played', component: MostPlayedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryListComponent,
    ListeningHistoryNavigationComponent,
    ListeningHistoryDetailComponent,
    LogInComponent,
    AuthCallbackComponent,
    MostPlayedComponent,
    MostPlayedListComponent,
    MostPlayedItemComponent,
    MostPlayedDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxSpinnerModule
  ],
  providers: [LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
