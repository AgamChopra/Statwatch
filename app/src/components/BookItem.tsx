import React, { Component } from 'react';
import Book from '../models/Book';

interface BookItemProps {
  book: Book;
}

class BookItem extends Component<BookItemProps> {
  render() {
    const { book } = this.props;
    return (
      <div>
        <h1>
          { book.title }
        </h1>
        <img src = {book.thumbnail} alt = "thumbnail"/>
        <h2>
          { book.edition } by { book.author }
        </h2>
      </div>
    );
  }
}

export default BookItem;
