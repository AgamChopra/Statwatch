import Book from '../models/Book';

export default interface BookBorrowApi {
  getBooks(): Book[];
  getBook(id: number): Book;
}
