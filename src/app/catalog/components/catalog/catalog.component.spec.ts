import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CatalogComponent } from './catalog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderByPipe } from '../../pipes/orderBy/order-by.pipe';
import { StoreModule, Store } from '@ngrx/store';
import { ICourse } from '../../interfaces';
import { CourseReducer } from '../../state/reducers';
import { LoadCourseAction, StoreCoursesAction } from '../../state/actions';

const mockCourses: ICourse[] = Array(3).fill({
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
});


describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({course: CourseReducer})
      ],
      declarations: [CatalogComponent, OrderByPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test ngFor', () => {
    component.courseList = mockCourses;
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const container: HTMLElement = nativeElement.querySelector(".container-item");
    expect(container.childElementCount).toBe(3);
  });

  it('should dispatch an action to load data when created', () => {
    const action = new LoadCourseAction({pageNumbers: 1, textFragment: undefined});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display a list of items after the data is loaded', () => {
    const action = new StoreCoursesAction({courses: mockCourses});
    store.dispatch(action);
    expect(component.courseList.length).toBe(3);
  });
});
