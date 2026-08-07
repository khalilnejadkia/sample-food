import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount/discount.component';
import { FrameModule } from '../frame/frame.module';




@NgModule({
  declarations: [
    DiscountComponent
  ],
  imports: [
    CommonModule,
    FrameModule
  ],
  exports: [
    DiscountComponent
  ]
})
export class PagesModule { }
