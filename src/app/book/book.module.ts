import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from './bookComponent/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BookItemComponent } from './bookComponent/book-item/book-item.component';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { DialogLoadingComponent } from './dialog-loading/dialog-loading.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'; // add this line


// import { MaterialComponents } from './material';

@NgModule({
  declarations: [
    BookComponent,
    BookItemComponent,
    DialogDetailComponent,
    DialogLoadingComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ]

})
export class BookModule { }
