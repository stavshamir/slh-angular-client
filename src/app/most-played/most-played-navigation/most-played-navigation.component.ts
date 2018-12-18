import {Component} from '@angular/core';
import {MostPlayedService} from '../most-played.service';

@Component({
  selector: 'app-most-played-navigation',
  templateUrl: '../../shared/pages-navigation.component.html',
})
export class MostPlayedNavigationComponent {
  currentPage = 1;
  numberOfPages = 50 / this.mostPlayedService.pageSize;

  constructor(private mostPlayedService: MostPlayedService) { }

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
