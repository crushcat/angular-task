import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('CourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
