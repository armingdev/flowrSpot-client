import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { DiscoverFlowersComponent } from './components/discover-flowers/discover-flowers.component';
import { ListFlowersComponent } from './components/list-flowers/list-flowers.component';



@NgModule({
  declarations: [HomepageLayoutComponent, DiscoverFlowersComponent, ListFlowersComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
