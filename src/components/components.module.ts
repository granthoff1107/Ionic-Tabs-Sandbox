import { NgModule } from '@angular/core';
import { RestEzListComponent } from './rest-ez-list/rest-ez-list';
import { LayoutComponent } from './layout/layout';
import { PageBaseComponent } from './page-base/page-base';
@NgModule({
	declarations: [RestEzListComponent,
    LayoutComponent,
    PageBaseComponent],
	imports: [],
	exports: [RestEzListComponent,
    LayoutComponent,
    PageBaseComponent]
})
export class ComponentsModule {}
