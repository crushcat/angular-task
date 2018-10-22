import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { PageAddComponent } from './components/page-add/page-add.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogComponent
    },
    {
        path: 'add',
        component: PageAddComponent
    },
    {
        path: ':id',
        component: PageEditComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CatalogRoutingModule {}