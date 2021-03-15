import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth.guard';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/search/filter/filter.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path: '', component: FilterComponent },
    { path: 'search/:searchValue', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'card/:id', component: CardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule {}
