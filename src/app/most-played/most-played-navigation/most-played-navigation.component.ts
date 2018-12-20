import {Component, OnDestroy, OnInit} from '@angular/core';
import {MostPlayedService} from '../most-played.service';
import {MostPlayedItem} from '../most-played-item.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-most-played-navigation',
  templateUrl: '../../shared/pages-navigation.component.html',
})
export class MostPlayedNavigationComponent implements OnInit, OnDestroy {
  currentPage = 0;
  numberOfPages: number;
  private onNewItemsSubscription: Subscription;

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit(): void {
    this.onNewItemsSubscription = this.mostPlayedService.onNewItems.subscribe(
      (mostPlayed: {items: MostPlayedItem[], currentPage: number}) => {
        this.currentPage = this.mostPlayedService.mostPlayedItems.length > 0 ? mostPlayed.currentPage + 1 : 0;
        this.numberOfPages = Math.ceil(this.mostPlayedService.mostPlayedItems.length / this.mostPlayedService.pageSize);

        this.mostPlayedService.onSelect.next({
          item: mostPlayed.items[0],
          index: 1
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.onNewItemsSubscription.unsubscribe();
  }

  goToPage(page: number) {
    const fixedPageNumber = page - 1;
    const pageSize = this.mostPlayedService.pageSize;

    this.mostPlayedService.onNewItems.next({
      items: this.mostPlayedService.mostPlayedItems.slice(fixedPageNumber * pageSize, (fixedPageNumber + 1) * pageSize),
      currentPage: fixedPageNumber
    });

    this.currentPage = page;
  }

  navigateByInput(event: KeyboardEvent) {
    const target = <HTMLTextAreaElement>event.target;
    this.goToPage(parseInt(target.value, 10));
    target.value = '';
  }
}
