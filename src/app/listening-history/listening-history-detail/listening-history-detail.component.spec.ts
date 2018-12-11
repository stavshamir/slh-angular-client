import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryDetailComponent } from './listening-history-detail.component';

describe('ListeningHistoryDetailComponent', () => {
  let component: ListeningHistoryDetailComponent;
  let fixture: ComponentFixture<ListeningHistoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningHistoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
