import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../book-routing.module';
import { BookService } from '../../bookService/book.service';

import { BookComponent } from './book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [BookComponent],
      providers: [BookService],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Book Component', () => {
    expect(component).toBeTruthy();
  });

  // it('navigate to "search" redirects you to /search', fakeAsync(() => {
  //   const location:Location = TestBed.inject(Location);
  //   const router:Router = TestBed.inject(Router);
  //   router.initialNavigation();
  //   router.navigate(['']).then(() => {
  //     expect(location.path()).toBe('/search');
  //   });
  // }));
});
