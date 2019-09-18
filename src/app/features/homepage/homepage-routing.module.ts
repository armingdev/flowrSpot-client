import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageLayoutComponent} from './layouts/homepage-layout/homepage-layout.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
