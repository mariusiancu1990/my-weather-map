import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'weather', 
    loadChildren: () => import('./modules/weather/weather.module')
    .then(m => m.WeatherModule) 
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }