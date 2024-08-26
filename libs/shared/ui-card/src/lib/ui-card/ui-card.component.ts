import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent implements OnChanges {
 
  @Input() Title!:string;
  @Input() Content!:string;
  @Input() type!: string;

  constructor(){
    console.log(this.type)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['type'].currentValue)
  }
}

