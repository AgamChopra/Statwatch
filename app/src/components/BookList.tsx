import React, { Component } from 'react';
import Book from '../models/Book';
import BookItem from './BookItem';

interface BookListProps {
  books: Book[];
}

class BookList extends Component <BookListProps> {
  render() {
    return (
      this.props.books.map(book => {
        return (
          <BookItem book={book} />
        );
      })
    );
  }
}

export default BookList;
