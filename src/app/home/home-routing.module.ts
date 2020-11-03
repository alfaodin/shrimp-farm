import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: FarmDashboardComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'farm',
        loadChildren: () => import('../farm/farm.module').then(m => m.FarmModule),
        data: { animationState: 'Two' }
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
