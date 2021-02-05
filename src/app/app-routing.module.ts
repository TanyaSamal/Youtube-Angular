import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/components/login/login.component";
import { AuthGuard } from "./auth/services/auth.guard";
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CardComponent } from "./youtube/components/card/card.component";
import { SearchComponent } from "./youtube/components/search/search.component";

const routes: Routes = [
    {path: '', component: SearchComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'card/:id', component: CardComponent},
    {path: '**', component: NotFoundComponent }
]; 

@NgModule ({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}