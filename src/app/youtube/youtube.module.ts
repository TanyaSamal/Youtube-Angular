import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { MaterialModule } from '../material.module';
import { ColorBorderDirective } from './directives/colorBorder.directive';
import { FilterComponent } from './components/search/filter/filter.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByWordPipe } from './pipes/sortByWord.pipe';
import { ItemsService } from './services/items.service';
import { CardComponent } from './components/card/card.component';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchItemComponent,
        FilterComponent
    ],
    declarations: [
        SearchItemComponent,
        FilterComponent,
        ColorBorderDirective,
        SortByDatePipe,
        SortByViewsPipe,
        SortByWordPipe,
        CardComponent,
    ],
    providers: [
        ItemsService
    ]
})

export class YoutubeModule {}
