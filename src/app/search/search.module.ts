import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MaterialModule } from '../material.module';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByWordPipe } from './pipes/sortByWord.pipe';
import { ColorBorderDirective } from './directives/colorBorder.directive';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchResultsComponent,
        SearchItemComponent,
        SortByDatePipe,
        SortByViewsPipe,
        SortByWordPipe
    ],
    declarations: [
        SearchResultsComponent,
        SearchItemComponent,
        SortByDatePipe,
        SortByViewsPipe,
        SortByWordPipe,
        ColorBorderDirective
    ]
})

export class SearchModule {}