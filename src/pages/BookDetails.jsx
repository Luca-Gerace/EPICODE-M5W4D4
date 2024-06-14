import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentArea from '../components/CommentArea';
import CommentModal from '../components/CommentModal';
import { Row, Col } from 'react-bootstrap';
import axios from '../modules/ApiAxios';

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
    axios.get(`books/${asin}/comments/`)
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