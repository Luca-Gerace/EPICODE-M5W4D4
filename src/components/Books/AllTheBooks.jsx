import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { useState } from 'react';

const AlltheBooks = ({ books, search }) => {

  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book === selectedBook ? null : book);
  };
  
  return (
    <Row>
      {books
        .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
        .map(book => (
          <SingleBook
            key={book.asin}
            book={book}
            isSelected={book === selectedBook}
            handleCardClick={() => handleCardClick(book)}
          />
        ))
      }
    </Row>
  )
}

export default AlltheBooks;