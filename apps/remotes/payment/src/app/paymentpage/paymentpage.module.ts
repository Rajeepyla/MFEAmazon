import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'', component:PaymentComponent
    }])
  ]
})
export class PaymentpageModule { }
