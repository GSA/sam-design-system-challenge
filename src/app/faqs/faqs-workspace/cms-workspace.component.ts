import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import {FormlyFieldConfig} from '@ngx-formly/core';

import {filter, map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

// import {workspaceMenuData} from '../../common/sam-workspace-menu/sam-workspace-menu.data';
// import {IntegrityWsFiltersService} from './integrity-ws-filters/integrity-ws-filters.service';
import {FaqsService} from '../faqs-service/faqs.service';
import {CmsFiltersService} from './filter-services/cms-filters.service';
import {cmsFilters} from './cms-filters.config';

@Component({
  selector: 'app-cms-workspace',
  templateUrl: './cms-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FaqsService, CmsFiltersService]
})
export class CmsWorkspaceComponent implements OnInit, AfterViewInit {

  @ViewChild('resultList', {static: true}) resultList;

  form = new FormGroup({});

  fields: FormlyFieldConfig[] = cmsFilters;


  showFilters = true;

  public filterChange$ = new BehaviorSubject<object>([]);


  subheader = {
    actions: [
      {id: 'downloadAction', icon: 'download', text: 'Download'}
    ]
  };

  // navigationModel = workspaceMenuData;

  constructor(private change: ChangeDetectorRef, public service: FaqsService,
              public filtersService: CmsFiltersService,
			  private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.change.detectChanges();
  }

  subheaderActionClicked(action) {

  }

  newAccount(event) {
	this.router.navigate(['/workspace/faqs/create']);
    console.log(`%cLog: Creating new account`, 'color: blue; font-weight: bold');
	
  }

  newSearch(event) {
    console.log(`%cLog: Searching accounts`, 'color: blue; font-weight: bold');
  }

}
