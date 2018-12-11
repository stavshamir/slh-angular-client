import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';
import { ListeningHistoryItemComponent } from './listening-history/listening-history-list/listening-history-item/listening-history-item.component';
import { ListeningHistoryListComponent } from './listening-history/listening-history-list/listening-history-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
