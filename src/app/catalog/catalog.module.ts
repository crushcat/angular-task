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
    SearchPipe
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
