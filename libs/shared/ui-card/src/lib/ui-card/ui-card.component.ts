import { AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { UiCardFooterComponent } from '../ui-card-footer/ui-card-footer.component';
import { UiCardBodyComponent } from '../ui-card-body/ui-card-body.component';
import { UiCardHeaderComponent } from '../ui-card-header/ui-card-header.component';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css'], // Fixed styleUrl to styleUrls
})
export class UiCardComponent implements OnInit, AfterViewInit {

  // @Input() title!: string;
  // @Input() content!: string;
  // @Input() type!: string;

  @ContentChild('header', { static: true }) header!: TemplateRef<UiCardHeaderComponent>;
  @ContentChild('body', { static: true }) body!: TemplateRef<UiCardBodyComponent>;
  @ContentChild('footer', { static: true }) footer!: TemplateRef<UiCardFooterComponent>;

  



  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }
}


