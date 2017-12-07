import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MainWikiComponentComponent } from './main-wiki-component/main-wiki-component.component';

import { WikiService } from './wiki-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    SearchComponentComponent,
    MainWikiComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
