import {Component, Input} from '@angular/core';
import {MostPlayedItem} from '../../most-played-item.model';
import {MostPlayedService} from '../../most-played.service';

@Component({
  selector: 'app-most-played-item',
  templateUrl: './most-played-item.component.html',
})
export class MostPlayedItemComponent {
  @Input() item: MostPlayedItem;
  @Input() index: number;

  constructor(private mostPlayedService: MostPlayedService) { }

  onSelect() {
    this.mostPlayedService.onSelect.next({
      item: this.item,
      index: this.index
    });
  }
}
