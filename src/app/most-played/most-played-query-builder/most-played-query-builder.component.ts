import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MostPlayedService} from '../most-played.service';
import {Filter} from './filter.model';
import {MostPlayedItem} from '../most-played-item.model';

@Component({
  selector: 'app-most-played-query-builder',
  templateUrl: './most-played-query-builder.component.html',
})
export class MostPlayedQueryBuilderComponent implements OnInit, OnDestroy {
  currentTime = new Date();
  private onFilterRemovedSubscription = new Subscription();

  filters: { [key: string]: Filter } = {
    'year': {
      type: 'year',
      minValue: 2018,
      maxValue: 2100,
      isActive: false,
      from: this.currentTime.getFullYear(),
      to: this.currentTime.getFullYear() + 1
    },
    'month': {
      type: 'month',
      minValue: 1,
      maxValue: 12,
      isActive: false,
      from: this.currentTime.getMonth() + 1,
      to: this.currentTime.getMonth() + 2 === 13 ? 1 : this.currentTime.getMonth() + 2
    },
    'hour': {
      type: 'hour',
      minValue: 0,
      maxValue: 23,
      isActive: false,
      from: this.currentTime.getHours(),
      to: this.currentTime.getHours() + 1 === 24 ? 0 : this.currentTime.getHours() + 1
    }
  };

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit() {
    this.onFilterRemovedSubscription = this.mostPlayedService.onFilterRemoved.subscribe(
      (filterType: string) => this.filters[filterType].isActive = false
    );
  }

  ngOnDestroy(): void {
    this.onFilterRemovedSubscription.unsubscribe();
  }

  go() {
    this.mostPlayedService.getMostPlayed(this.filters).subscribe(
      (items: MostPlayedItem[]) => {
        this.mostPlayedService.mostPlayedItems = items;

        this.mostPlayedService.onNewItems.next({
          items: items.slice(0, this.mostPlayedService.pageSize),
          currentPage: 0
        });
      }
    );
  }
}
