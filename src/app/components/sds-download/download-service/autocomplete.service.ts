import { Injectable } from '@angular/core';
import { SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import { Observable, of } from 'rxjs';
import { downloadData } from './download.data';


@Injectable({ providedIn: 'root' })
export class AutocompleteService implements SDSAutocompleteServiceInterface {

  private loadedData = downloadData;

  constructor() {
  }

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {

    const data = of(this.loadedData);
    let itemsOb: Observable<Object[]>;
    const itemIncrease = 25;

    if(searchValue){
      const filteredCountries = this.loadedData.filter(itm => {
        return itm['name'].toUpperCase( ).indexOf(searchValue.toUpperCase( )) !== -1;
      });
      itemsOb = of(filteredCountries);
    }
    else{
      itemsOb = data;
    }

    let items: object[];
    itemsOb.subscribe(
      (result) => {
        items = result;
      }
    );

    const totalItemCount = items.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    const selectedItems = items.slice(currentItems, maxSectionPosition);



    const returnItem = {
      items: selectedItems,
      totalItems: totalItemCount
    };

    return of(returnItem);
  }
}