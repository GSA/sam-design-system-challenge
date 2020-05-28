import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { downloadData } from './download.data';

@Injectable()
export class DownloadService {

  constructor() { }
  
    public model: SearchListConfiguration = {
	  defaultSortValue: "createDateDescending",
	  pageSize: 25,
	  sortList:
	    [
	      { text: "Create Date (Newest)", value: "createDateDescending" },
	      { text: "Create Date (Oldest)", value: "createDateAscending" },
	      { text: "Expire Date (Newest)", value: "expireDateDescending" },
	      { text: "Expire Date (Oldest)", value: "expireDateAscending" },
	      { text: "File Name (A-Z)", value: "fileNameAscending" },
	      { text: "File Name (Z-A)", value: "fileNameDescending" },
	    ]
	};
  
    getData(search: SearchParameters): Observable<SearchResult> {

        let records = downloadData;
        
        this.sortRecords(records, search);

        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        return of({
            items: records.slice(start, end),
            totalItems: records.length
        });
    }
    
    sortRecords(records, search: SearchParameters) {
        records.sort((a, b) => {
            switch (search.sortField) {
            	case 'fileNameAscending':
            		return (a.fileName > b.fileName) ? 1 : -1;
            	case 'fileNameDescending':
            		return (a.fileName > b.fileName) ? -1 : 1;
            	case 'createDateAscending':
            		return ((new Date(a.createDate)) > (new Date(b.createDate))) ? 1 : -1;
            	case 'createDateDescending':
            		return ((new Date(a.createDate)) > (new Date(b.createDate))) ? -1 : 1;
            	case 'expireDateAscending':
            		return ((new Date(a.expireDate)) > (new Date(b.expireDate))) ? 1 : -1;
            	case 'expireDateDescending':
            		return ((new Date(a.expireDate)) > (new Date(b.expireDate))) ? -1 : 1;
            	default: {
            		return (a.fileName > b.fileName) ? 1 : -1;
            	}
           }
		});
    }
}
