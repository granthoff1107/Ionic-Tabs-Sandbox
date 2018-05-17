import { NgModule } from '@angular/core';
import { RestEzListComponent } from './rest-ez-list/rest-ez-list';
import { LayoutComponent } from './layout/layout';
@NgModule({
	declarations: [RestEzListComponent,
    LayoutComponent],
	imports: [],
	exports: [RestEzListComponent,
    LayoutComponent]
})
export class ComponentsModule {}
