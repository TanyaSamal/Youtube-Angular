import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MaterialModule } from '../material.module';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchResultsComponent,
        SearchItemComponent
    ],
    declarations: [
        SearchResultsComponent,
        SearchItemComponent
    ]
})

export class SearchModule {}