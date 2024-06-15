import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentArea from '../components/CommentArea/CommentArea';
import { Row, Col } from 'react-bootstrap';
import axios from '../modules/ApiAxios';
import './BookDetails.css';

export default function BookDetails({ books }) {
  const { asin } = useParams();
  const [comments, setComments] = useState([]);
  
  const book = books.find(book => book.asin === asin);

  useEffect(() => {
    if (book) {
      fetchComments(book.asin);
    }
  }, [book]);

  const fetchComments = (asin) => {
    axios.get(`books/${asin}/comments/`)
      .then(response => setComments(response.data));
  };

  const handleUpdateComments = () => {
    fetchComments(book.asin);
  };

  return (
    <Row>
      <Col xs={12} md={3} className='mb-4'>
        <img src={book.img} alt={book.title} className='book-img object-fit-cover' />
      </Col>
      <Col xs={12} md={6} className='mb-4 border-end'>
        <h1>{book.title}</h1>
        <p>Price: ${book.price}</p>
        <p>Category: {book.category}</p>
      </Col>
      <Col xs={12} md={3}>
        <CommentArea asin={book.asin} comments={comments} handleUpdateComments={handleUpdateComments} />
      </Col>
    </Row>
  );
}