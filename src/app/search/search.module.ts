import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';
import { MaterialModule } from '../material.module';
import { ColorBorderDirective } from './directives/colorBorder.directive';
import { FilterComponent } from './filter/filter.component';

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
        ColorBorderDirective
    ]
})

export class SearchModule {}
