import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedNavigationComponent } from './most-played-navigation.component';

describe('MostPlayedNavigationComponent', () => {
  let component: MostPlayedNavigationComponent;
  let fixture: ComponentFixture<MostPlayedNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPlayedNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPlayedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
