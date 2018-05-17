import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: 'layout.html'
})
export class LayoutComponent {

  @Input() pageName: string;

  constructor() {
  }

}
