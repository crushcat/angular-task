import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddComponent } from './page-add.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageSaveComponent', () => {
  let component: PageAddComponent;
  let fixture: ComponentFixture<PageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot({})],
      declarations: [ PageAddComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
