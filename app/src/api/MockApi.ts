import booksResponse from './booksResponse.json';
import Book from '../models/Book';
import BookGrapApi from './BookBorrowApi';

export default class MockApi implements BookGrapApi{
  private books: Book[] = booksResponse.map(book => {
    return {
      ... book,
      thumbnail: book.identifiers[0].thumbnail,
    };
  });

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books[id];
  }
}
