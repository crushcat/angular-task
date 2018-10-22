import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TitleComponent, LoginComponent],
  exports: [FormsModule, CommonModule, TitleComponent, LoginComponent]
})
export class SharedModule { }
