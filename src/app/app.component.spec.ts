import { Location } from '@angular/common';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookComponent } from './book/bookComponent/book/book.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [AppComponent, BookComponent, HomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FrontendTask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend-task');
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    const location: Location = TestBed.inject(Location);
    const router: Router = TestBed.inject(Router);
    router.initialNavigation();
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  // it('navigate to "search" redirects you to /search', fakeAsync(() => {
  //   const location: Location = TestBed.inject(Location);
  //   const router: Router = TestBed.inject(Router);
  //   router.initialNavigation();
  //   router.navigate(['/search']).then(() => {
  //     expect(location.path()).toBe('/search');
  //   });
  // }));

});
