import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';
import { LoginComponent } from './login/login.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

const routes: Routes = [
  { path: 'orders', component: OrderViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentListComponent },
  // Add other routes if needed
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Optional default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
