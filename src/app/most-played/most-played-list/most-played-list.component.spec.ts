import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedListComponent } from './most-played-list.component';

describe('MostPlayedListComponent', () => {
  let component: MostPlayedListComponent;
  let fixture: ComponentFixture<MostPlayedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPlayedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPlayedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
