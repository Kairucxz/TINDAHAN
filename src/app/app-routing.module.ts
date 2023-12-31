import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { InventoryLayoutComponent } from './inventory/inventory-layout/inventory-layout.component';
import { PointOfSaleLayoutComponent } from './point-of-sale/point-of-sale-layout/point-of-sale-layout.component';
import { ProfileLayoutComponent } from './profile/profile-layout/profile-layout.component';
import { CustomerLayoutComponent } from './user-management/customer/customer-layout/customer-layout.component';
import { EmployeeLayoutComponent } from './user-management/employee/employee-layout/employee-layout.component';
import { AuthGuardService } from './service/authguard/auth-guard.service';
import { AppLayoutComponent } from './layout/app-layout.component';
import { AccessComponent } from './auth/access/access.component';
import { ErrorComponent } from './auth/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalesLayoutComponent } from './sales/sales-layout/sales-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'denied-access', component: AccessComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        data: {
          title: 'dashboard',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'inventory',
        component: InventoryLayoutComponent,
        data: {
          title: 'inventory',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'pos',
        component: PointOfSaleLayoutComponent,
        data: {
          title: 'pos',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'profile',
        component: ProfileLayoutComponent,
        data: {
          title: 'profile',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'customer',
        component: CustomerLayoutComponent,
        data: {
          title: 'customer',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'employee',
        component: EmployeeLayoutComponent,
        data: {
          title: 'employee',
        },
        canActivate: [AuthGuardService],
      },
      {
        path: 'sales',
        component: SalesLayoutComponent,
        data: {
          title: 'sales',
        },
        canActivate: [AuthGuardService],
      },
    ],
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '/not-found' }, // Wildcard route for "Page Not Found"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
