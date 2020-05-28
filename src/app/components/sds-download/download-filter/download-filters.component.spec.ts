import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFiltersComponent } from './download-filters.component';

describe('DownloadFiltersComponent', () => {
  let component: DownloadFiltersComponent;
  let fixture: ComponentFixture<DownloadFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
