import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MostPlayedService} from '../most-played.service';
import {Filter} from './filter.model';

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
      defaultValue: this.currentTime.getFullYear(),
      isActive: false,
      from: this.currentTime.getFullYear(),
      to: this.currentTime.getFullYear() + 1
    },
    'month': {
      type: 'month',
      minValue: 1,
      maxValue: 12,
      defaultValue: this.currentTime.getMonth() + 1,
      isActive: false,
      from: this.currentTime.getMonth() + 1,
      to: this.currentTime.getMonth() + 2
    },
    'hour': {
      type: 'hour',
      minValue: 0,
      maxValue: 23,
      defaultValue: this.currentTime.getHours(),
      isActive: false,
      from: this.currentTime.getHours(),
      to: this.currentTime.getHours() + 1
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

}
