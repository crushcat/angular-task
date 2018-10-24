import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TitleComponent, LoginComponent],
  exports: [FormsModule, CommonModule, ReactiveFormsModule, TitleComponent, LoginComponent]
})
export class SharedModule { }
