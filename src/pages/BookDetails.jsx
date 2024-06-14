import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentArea from '../components/CommentArea';
import CommentModal from '../components/CommentModal';
import { Row, Col } from 'react-bootstrap';

function BookPage({ books }) {

  // Hooks
  const { asin } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  
  // Book detail
  const book = books.find(book => book.asin === asin);

  useEffect(() => {
    if (book) {
      fetchComments(book.asin);
    }
  }, [book]);

  const fetchComments = (asin) => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmU2OTBiM2IyNTAwMTUxYjU1NzYiLCJpYXQiOjE3MTcyMzEzODIsImV4cCI6MTcxODQ0MDk4Mn0.cdURqpRo5x4tub6GqqUKI3x2ntlLGqOPaLj46UuQW-c",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setComments(data));
  };

  // Card handler
  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateComments = () => {
    fetchComments(book.asin);
  };

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <Row>
      <Col md={3}>
        <img src={book.img} alt={book.title} style={{ height: '450px' }} />
      </Col>
      <Col md={6}>
        <h1 onClick={handleCardClick}>{book.title}</h1>
        <p>Price: ${book.price}</p>
        <p>Category: {book.category}</p>
      </Col>
      <Col md={3} className='be-2'>
        <h2>Reviews:</h2>
        <CommentArea asin={book.asin} comments={comments} handleUpdateComments={handleUpdateComments} />
        <CommentModal asin={book.asin} showModal={showModal} handleCloseModal={handleCloseModal} handleUpdateComments={handleUpdateComments} />
      </Col>
    </Row>
  );
}

export default BookPage;