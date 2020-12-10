import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
