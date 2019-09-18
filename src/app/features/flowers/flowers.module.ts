import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersLayoutComponent } from './layouts/flowers-layout/flowers-layout.component';
import {FlowersRoutingModule} from './flowers-routing.module';



@NgModule({
  declarations: [FlowersLayoutComponent],
  imports: [
    CommonModule,
    FlowersRoutingModule
  ]
})
export class FlowersModule { }
