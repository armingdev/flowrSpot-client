import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestSightingsLayoutComponent } from './layouts/latest-sightings-layout/latest-sightings-layout.component';
import {LatestSightingsRoutingModule} from './latest-sightings-routing.module';



@NgModule({
  declarations: [LatestSightingsLayoutComponent],
  imports: [
    CommonModule,
    LatestSightingsRoutingModule
  ]
})
export class LatestSightingsModule { }
