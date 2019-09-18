import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FlowersLayoutComponent} from './layouts/flowers-layout/flowers-layout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: FlowersLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
