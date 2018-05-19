import { Component, TemplateRef, Input, ViewChild } from '@angular/core';
import { RestEzListComponent } from '../rest-ez-list/rest-ez-list';

@Component({
  selector: 'page-base',
  templateUrl: 'page-base.html'
})
export class PageBaseComponent {

  @Input() header: TemplateRef<any>;
  @ViewChild('restEzList') restEzList : RestEzListComponent

  constructor() {
  }

}
