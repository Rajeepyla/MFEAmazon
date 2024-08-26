import { Component, Input } from '@angular/core';


@Component({
  selector: 'lib-ui-spinner',
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.css',
})
export class UiSpinnerComponent {
  @Input() type!: string;
  @Input() size!: string;
}
