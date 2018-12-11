import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryNavigationComponent } from './listening-history-navigation.component';

describe('ListeningHistoryNavigationComponent', () => {
  let component: ListeningHistoryNavigationComponent;
  let fixture: ComponentFixture<ListeningHistoryNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningHistoryNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
