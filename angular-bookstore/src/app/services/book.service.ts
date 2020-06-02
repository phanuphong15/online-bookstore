import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/bookCategory';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8081/api/v1/books';
  private bookCategoryUrl = 'http://localhost:8081/api/v1/book-category'

  constructor(private httpClient: HttpClient) { }

  getBooks(theCategoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(res => res._embedded.books)
    )
  }

  getBookCategory() {
    return this.httpClient.get<GetResponseBookCategory>(this.bookCategoryUrl).pipe(
      map(res => res._embedded.bookCategory)
    )
  }
}

interface GetResponseBooks {
  _embedded: {
    books: Book[]
  }
}

interface GetResponseBookCategory {
  _embedded: {
    bookCategory: BookCategory[]
  }
}
