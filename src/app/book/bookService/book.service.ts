import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Book } from '../book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiPart1: string ="https://www.googleapis.com/books/v1/volumes?q=";
  private apiPart2: string ="&fields=items(volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks/thumbnail,volumeInfo/description,volumeInfo/previewLink,volumeInfo/publishedDate)&key=AIzaSyBXNXIChx9d3iULcJw7WQDum0g0L9kELcE";
  books:Book[]=JSON.parse(localStorage.getItem("books") || "false");

  constructor(private httpClient: HttpClient) {}

  getBook(val:string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiPart1}${val}${this.apiPart2}`);
  }

  setBook(books:Book[]):void{
    this.books=books;
    localStorage.setItem("books",JSON.stringify(this.books))
  }

  removeBooks(){
    localStorage.removeItem('books');
    this.setBook([]);
  }
}
