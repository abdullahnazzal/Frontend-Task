import { Component, Inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent implements OnInit {
  isReadMore = true
  // readMore = false;
  // longText = this.data?.volumeInfo?.description;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) { }

  ngOnInit(): void {
  }

  showText() {
      this.isReadMore = !this.isReadMore
  }
}
