import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LatestSightingsLayoutComponent} from './layouts/latest-sightings-layout/latest-sightings-layout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LatestSightingsLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestSightingsRoutingModule { }
