import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';
import { ListeningHistoryItemComponent } from './listening-history/listening-history-list/listening-history-item/listening-history-item.component';
import { ListeningHistoryListComponent } from './listening-history/listening-history-list/listening-history-list.component';
import { ListeningHistoryNavigationComponent } from './listening-history/listening-history-navigation/listening-history-navigation.component';
import { ImgHoverEnlargeDirective } from './directives/img-hover-enlarge.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryListComponent,
    ListeningHistoryNavigationComponent,
    ImgHoverEnlargeDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
