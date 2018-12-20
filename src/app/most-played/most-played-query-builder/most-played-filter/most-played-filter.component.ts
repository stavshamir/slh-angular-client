import {Component, Input, OnInit} from '@angular/core';
import {MostPlayedService} from '../../most-played.service';
import {Filter} from '../filter.model';

@Component({
  selector: 'app-most-played-filter',
  templateUrl: './most-played-filter.component.html',
})
export class MostPlayedFilterComponent implements OnInit {
  @Input() filter: Filter;

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit() {
  }

  removedFilter() {
    this.mostPlayedService
      .onFilterRemoved
      .next(this.filter.type.toString());
  }
}
