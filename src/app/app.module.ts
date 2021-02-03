import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './youtube/components/search/search.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
