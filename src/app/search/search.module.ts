import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MaterialModule } from '../material.module';
import { ColorBorderDirective } from './directives/colorBorder.directive';
import { FilterComponent } from './filter/filter.component';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchResultsComponent,
        SearchItemComponent,
        FilterComponent
    ],
    declarations: [
        SearchResultsComponent,
        SearchItemComponent,
        FilterComponent,
        ColorBorderDirective
    ]
})

export class SearchModule {}