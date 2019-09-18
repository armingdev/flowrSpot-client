import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FavoritesLayoutComponent} from './layouts/favorites-layout/favorites-layout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: FavoritesLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
