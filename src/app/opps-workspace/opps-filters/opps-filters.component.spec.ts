import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppsFiltersComponent } from './opps-filters.component';

describe('OppsFiltersComponent', () => {
  let component: OppsFiltersComponent;
  let fixture: ComponentFixture<OppsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
