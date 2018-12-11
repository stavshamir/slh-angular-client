import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryListComponent } from './listening-history-list.component';

describe('ListeningHistoryListComponent', () => {
  let component: ListeningHistoryListComponent;
  let fixture: ComponentFixture<ListeningHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
