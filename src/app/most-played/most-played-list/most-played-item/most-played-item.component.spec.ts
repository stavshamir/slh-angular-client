import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedItemComponent } from './most-played-item.component';

describe('MostPlayedItemComponent', () => {
  let component: MostPlayedItemComponent;
  let fixture: ComponentFixture<MostPlayedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPlayedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPlayedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
