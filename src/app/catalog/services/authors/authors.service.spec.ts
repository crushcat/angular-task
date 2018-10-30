import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
