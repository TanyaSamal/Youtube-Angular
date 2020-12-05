import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SystemComponent } from './system/system.component';
import { HeaderComponent } from './system/header/header.component';
import { SearchComponent } from './system/search/search.component';
import { SearchResultsComponent } from './system/search/search-results/search-results.component';
import { SearchItemComponent } from './system/search/search-item/search-item.component';
import { FilterComponent } from './system/header/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    SystemComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
