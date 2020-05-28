import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsDownloadComponent } from './sds-download.component';

describe('SdsDownloadComponent', () => {
  let component: SdsDownloadComponent;
  let fixture: ComponentFixture<SdsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
