import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './checkout/payment/payment.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent, children: [{ path: 'payment', component: PaymentComponent }] },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CheckoutComponent, CartComponent, PaymentComponent]
})
export class ShopModule {}
