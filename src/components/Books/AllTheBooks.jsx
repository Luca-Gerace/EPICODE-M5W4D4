import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import { useState } from 'react';
import OffcanvasCommentArea from '../CommentArea/units/OffcanvasCommentArea';

const AlltheBooks = ({ books, search }) => {
  // Hook
  const [selectedBook, setSelectedBook] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Handlers
  const handleCardClick = (book) => {
    setSelectedBook(book === selectedBook ? null : book);
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setSelectedBook(null);  // Rimuove la selezione del libro
  };

  return (
    <>
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
      <OffcanvasCommentArea
        show={showOffcanvas}
        handleClose={handleCloseOffcanvas}
        book={selectedBook}
      />
    </>
  );
}

export default AlltheBooks;