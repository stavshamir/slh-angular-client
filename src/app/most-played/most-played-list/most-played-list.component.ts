import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MostPlayedItem} from '../most-played-item.model';
import {MostPlayedService} from '../most-played.service';

@Component({
  selector: 'app-most-played-list',
  templateUrl: './most-played-list.component.html',
})
export class MostPlayedListComponent implements OnInit, OnDestroy {
  mostPlayed: MostPlayedItem[];
  currentPage: number;
  private onNewItemsSubscription: Subscription;

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit() {
    this.onNewItemsSubscription = this.mostPlayedService.onNewItems.subscribe(
      (mostPlayed: {items: MostPlayedItem[], currentPage: number}) => {
        this.mostPlayed = mostPlayed.items;
        this.currentPage = mostPlayed.currentPage;

        this.mostPlayedService.onSelect.next({
          item: mostPlayed.items[0],
          index: this.getAbsoluteIndex(0)
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.onNewItemsSubscription.unsubscribe();
  }

  getAbsoluteIndex(relativeIndex: number): number {
    return relativeIndex + 1 + this.currentPage * this.mostPlayedService.pageSize;
  }
}
