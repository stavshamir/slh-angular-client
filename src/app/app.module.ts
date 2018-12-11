import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';
import { ListeningHistoryItemComponent } from './listening-history/listening-history-list/listening-history-item/listening-history-item.component';
import { ListeningHistoryListComponent } from './listening-history/listening-history-list/listening-history-list.component';
import { ListeningHistoryDetailComponent } from './listening-history/listening-history-detail/listening-history-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryListComponent,
    ListeningHistoryDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
