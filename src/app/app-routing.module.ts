import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { InventoryLayoutComponent } from './inventory/inventory-layout/inventory-layout.component';
import { PointOfSaleLayoutComponent } from './point-of-sale/point-of-sale-layout/point-of-sale-layout.component';
import { ProfileLayoutComponent } from './profile/profile-layout/profile-layout.component';
import { UserManagementModule } from './user-management/user-management.module';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'dashboard',
      component: DashboardLayoutComponent,
      data: {
        title: 'dashboard'
      }
    },
    {
      path: 'inventory',
      component: InventoryLayoutComponent,
      data: {
        title: 'inventory'
      }
    },
    {
      path: 'pos',
      component: PointOfSaleLayoutComponent,
      data: {
        title: 'pos'
      }
    },
    {
      path: 'profile',
      component: ProfileLayoutComponent,
      data: {
        title: 'profile'
      }
    },
    {
      path: 'userManagement',
      component: UserManagementModule,
      data: {
        title: 'userManagement'
      }
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
