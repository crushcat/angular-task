import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonContentComponentComponent } from './non-content-component.component';

describe('NonContentComponentComponent', () => {
  let component: NonContentComponentComponent;
  let fixture: ComponentFixture<NonContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
