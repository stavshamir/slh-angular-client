import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedDetailComponent } from './most-played-detail.component';

describe('MostPlayedDetailComponent', () => {
  let component: MostPlayedDetailComponent;
  let fixture: ComponentFixture<MostPlayedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPlayedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPlayedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
