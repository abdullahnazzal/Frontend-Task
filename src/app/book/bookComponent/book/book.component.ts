import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../book';
import { BookService } from '../../bookService/book.service';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoadingComponent } from '../../dialog-loading/dialog-loading.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  searchForm!: FormGroup;
  searchResult!: Observable<any>;

  books: Book[] = this.bookService.books;
  options: string[] = ['Angular', 'React', 'Vue'];
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.searchForm = formBuilder.group({
      searchBar: new FormControl('', [Validators.required, Validators.nullValidator]),
    });
  }

  ngOnInit(): void {
  }

  handleClearSeacrchInput(){
    this.searchForm.reset();
  }

  handleSearchForm(): void {
    let val = this.searchForm.value.searchBar;
    if (val) {
      const dialogRef = this.dialog.open(DialogLoadingComponent);
      dialogRef.afterOpened().subscribe(()=>{
        setTimeout(() => {dialogRef.close();} ,1000);

      });
      this.bookService.getBook(val).subscribe((b) => {

        this.books = b.items.map((p: any) => {
          return p;
        });
        this.bookService.setBook(this.books);
      });
    }
    // this.searchForm.reset();

  }
  onClick(val:string): any {
    if (val === 'a-z' ) {
      this.books= this.books.sort(this.SortArrayAscending)
    }
    else if (val === 'z-a') {
      this.books= this.books.sort(this.SortArrayDescending)

    }
    this.bookService.setBook(this.books);
  }
  SortArrayAscending(a: any, b: any): any {
    if (
      a?.volumeInfo?.title?.toLowerCase() < b?.volumeInfo?.title?.toLowerCase()
    ) {
      return -1;
    }
    if (
      a?.volumeInfo?.title?.toLowerCase() > b?.volumeInfo?.title?.toLowerCase()
    ) {
      return 1;
    }
    return 0;

  }
  SortArrayDescending(a: any, b: any): any {
    if (
      a?.volumeInfo?.title?.toLowerCase() < b?.volumeInfo?.title?.toLowerCase()
    ) {
      return 1;
    }
    if (
      a?.volumeInfo?.title?.toLowerCase() > b?.volumeInfo?.title?.toLowerCase()
    ) {
      return -1;
    }
    return 0;

  }

}
