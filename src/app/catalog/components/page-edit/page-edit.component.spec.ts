import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEditComponent } from './page-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PageEditComponent', () => {
  let component: PageEditComponent;
  let fixture: ComponentFixture<PageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot({}), ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [ PageEditComponent, TitleComponent, ItemFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
