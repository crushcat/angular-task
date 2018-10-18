import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CatalogComponent, ItemComponent, ToolboxComponent],
  exports: [CatalogComponent]
})
export class CatalogModule { }
