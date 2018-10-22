import { NgModule } from '@angular/core';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { FreshDirective } from './directives/fresh/fresh.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormDurationComponen } from './components/form-duration/form-duration.component';
import { CoursesService } from './services/cources/courses.service';
import { PageAddComponent } from './components/page-add/page-add.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { FormDateComponent } from './components/form-date/form-date.component';

@NgModule({
  imports: [
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    ItemComponent,
    ToolboxComponent,
    FreshDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    ItemFormComponent,
    FormDurationComponen,
    PageAddComponent,
    PageEditComponent,
    FormDateComponent
  ],
  providers: [CoursesService],
  exports: [CatalogComponent]
})
export class CatalogModule { }
