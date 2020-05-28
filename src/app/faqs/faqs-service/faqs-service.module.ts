import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqsService} from './faqs.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FaqsServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FaqsServiceModule,
      providers: [ FaqsService ]
    };
  }
}
