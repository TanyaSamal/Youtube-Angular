import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HeaderModule } from './header/header.module';
import { ItemsService } from './shared/services/items.service';
import { SearchModule } from './search/search.module';
import { SortByDatePipe } from './shared/pipes/sortByDate.pipe';
import { SortByViewsPipe } from './shared/pipes/sortByViews.pipe';
import { SortByWordPipe } from './shared/pipes/sortByWord.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    SearchComponent,
    SortByDatePipe,
    SortByViewsPipe,
    SortByWordPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HeaderModule,
    SearchModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
