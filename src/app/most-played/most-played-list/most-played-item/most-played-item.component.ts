import {Component, Input} from '@angular/core';
import {MostPlayedItem} from '../../most-played-item.model';

@Component({
  selector: 'app-most-played-item',
  templateUrl: './most-played-item.component.html',
  styleUrls: ['./most-played-item.component.css']
})
export class MostPlayedItemComponent {
  @Input() item: MostPlayedItem;
  @Input() index: number;

  constructor() { }

}
