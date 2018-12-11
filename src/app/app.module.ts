import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
