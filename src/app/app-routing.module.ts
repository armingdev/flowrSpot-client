import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', loadChildren: './features/homepage/homepage.module#HomepageModule' },
  { path: 'flowers', loadChildren: './features/flowers/flowers.module#FlowersModule', },
  { path: 'latest-sightings', loadChildren: './features/latest-sightings/latest-sightings.module#LatestSightingsModule' },
  { path: 'favorites', loadChildren: './features/favorites/favorites.module#FavoritesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
