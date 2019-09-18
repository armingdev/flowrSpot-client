import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesLayoutComponent } from './layouts/favorites-layout/favorites-layout.component';
import {FavoritesRoutingModule} from './favorites-routing.module';



@NgModule({
  declarations: [FavoritesLayoutComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
