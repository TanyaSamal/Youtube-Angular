import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { MaterialModule } from '../material.module';
import { ColorBorderDirective } from './directives/colorBorder.directive';
import { FilterComponent } from './components/search/filter/filter.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByWordPipe } from './pipes/sortByWord.pipe';
import { ItemsService } from './services/items.service';
import { CardComponent } from './components/card/card.component';
import { SocialsBlockComponent } from './components/socials-block/socials-block.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { shortenInterceptor } from './services/shortenInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        YoutubeRoutingModule
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
        SocialsBlockComponent,
    ],
    providers: [
        ItemsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: shortenInterceptor,
            multi: true,
        }
    ]
})

export class YoutubeModule {}
