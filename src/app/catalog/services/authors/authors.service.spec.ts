import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';
import { HttpClient } from '@angular/common/http';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClient]
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
