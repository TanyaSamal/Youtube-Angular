import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth.guard';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
    { path: '', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'card/:id', component: CardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule {}