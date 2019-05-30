import Book from '../models/Stat';

export default interface BookBorrowApi {
  getBooks(): Book[];
  getBook(id: number): Book;
}
