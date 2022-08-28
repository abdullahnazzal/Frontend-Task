import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BookService);
  });

  it('should be create Book Service', () => {
    expect(service).toBeTruthy();
  });
});
