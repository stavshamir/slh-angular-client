import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';
import { ListeningHistoryItemComponent } from './listening-history/listening-history-list/listening-history-item/listening-history-item.component';
import { ListeningHistoryListComponent } from './listening-history/listening-history-list/listening-history-list.component';
import { ListeningHistoryNavigationComponent } from './listening-history/listening-history-navigation/listening-history-navigation.component';
import { ImgHoverEnlargeDirective } from './directives/img-hover-enlarge.directive';
import { ListeningHistoryDetailComponent } from './listening-history/listening-history-detail/listening-history-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ListeningHistoryComponent },
  { path: 'listening-history', component: ListeningHistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryListComponent,
    ListeningHistoryNavigationComponent,
    ImgHoverEnlargeDirective,
    ListeningHistoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
