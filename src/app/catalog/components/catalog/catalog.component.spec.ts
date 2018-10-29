import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderByPipe } from '../../pipes/orderBy/order-by.pipe';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogComponent, OrderByPipe, ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test ngFor', () => {
    fixture.detectChanges();

    const nativeElement = fixture.nativeElement;
    const container: HTMLElement = nativeElement.querySelector(".container-item");
    expect(container.childElementCount).toBe(3);
  });
});
