import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MostPlayedService} from '../most-played.service';

@Component({
  selector: 'app-most-played-navigation',
  templateUrl: '../../shared/pages-navigation.component.html',
  styleUrls: ['./most-played-navigation.component.css']
})
export class MostPlayedNavigationComponent implements OnInit, OnDestroy {
  currentPage = 0;
  numberOfPages = 0;
  private numberOfPagesSubscription: Subscription;

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit() {
    this.numberOfPagesSubscription = this.mostPlayedService.numberOfPages.subscribe(
      (totalPages: number) => {
        this.numberOfPages = totalPages;
        this.currentPage = 1;
      }
    );
  }

  ngOnDestroy(): void {
    this.numberOfPagesSubscription.unsubscribe();
  }

  goToPage(page: number) {
    this.mostPlayedService
      .getMostPlayed(page - 1)
      .subscribe((o) => {
        this.mostPlayedService.onNewItems.next({ items: o.items, currentPage: page - 1 });
        this.currentPage = page;
      });
  }

  navigateByInput(event: KeyboardEvent) {
    const target = <HTMLTextAreaElement>event.target;
    this.goToPage(parseInt(target.value, 10));
    target.value = '';
  }
}
