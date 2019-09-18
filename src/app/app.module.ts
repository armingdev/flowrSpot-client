import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from './generated/api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://flowrspot-api.herokuapp.com'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
