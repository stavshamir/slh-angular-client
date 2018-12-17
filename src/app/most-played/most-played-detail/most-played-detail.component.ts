import {Component, OnInit} from '@angular/core';
import {MostPlayedItem} from '../most-played-item.model';
import {MostPlayedService} from '../most-played.service';

@Component({
  selector: 'app-most-played-detail',
  templateUrl: './most-played-detail.component.html',
  styleUrls: ['./most-played-detail.component.css']
})
export class MostPlayedDetailComponent implements OnInit {
  item: MostPlayedItem;
  index: number;

  constructor(private mostPlayedService: MostPlayedService) { }

  ngOnInit(): void {
    this.mostPlayedService.onSelect.subscribe(
      (selection: {item: MostPlayedItem, index: number}) => {
        this.item = selection.item;
        this.index = selection.index;
      }
    );
  }
}
