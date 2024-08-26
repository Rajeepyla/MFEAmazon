import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card/ui-card.component';

@NgModule({
  imports: [CommonModule],
  exports:[UiCardComponent],
  declarations: [UiCardComponent],
})
export class UiCardModule {}
