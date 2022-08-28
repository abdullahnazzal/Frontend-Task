import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../../book';
import { DialogDetailComponent } from '../../dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book?:Book;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(enterAnimationDuration: string, exitAnimationDuration: string): void{
    const dialogRef = this.dialog.open(DialogDetailComponent,{
      data:this.book,
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
