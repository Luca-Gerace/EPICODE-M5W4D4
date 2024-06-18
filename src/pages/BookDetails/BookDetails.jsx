import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentArea from '../../components/CommentArea/CommentArea';
import { Row, Col, Badge } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';
import axios from '../../modules/ApiAxios';
import './BookDetails.css';

export default function BookDetails({ books }) {
  // Hooks
  const { asin } = useParams();
  const [comments, setComments] = useState([]);
  
  // Trovo le info del book dal suo asin nella url
  const book = books.find(book => book.asin === asin);

  useEffect(() => {
    if (book) {
      fetchComments(book.asin);
    }
  }, [book]);

  // Get delle review associate a quel libro
  const fetchComments = (asin) => {
    axios.get(`books/${asin}/comments/`)
      .then(response => setComments(response.data));
  };

  // Funzione che calcola la media dei voti
  const calculateAverageRate = () => {
    if (comments.length === 0) return 0;
    const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
    return totalRate / comments.length;
  };
  
  const averageRate = calculateAverageRate();

  // Handler per l'update della commentarea
  const handleUpdateCommentArea = () => {
    fetchComments(book.asin);
  };


  return (
    <Row>
      <Col xs={12} md={3} className='mb-4'>
        <img src={book.img} alt={book.title} className='book-img object-fit-cover' />
      </Col>
      <Col xs={12} md={6} className='mb-4 border-end'>
        <div className="d-flex align-items-center pb-2">
          {Array.from({ length: 5 }).map((el, index) => (
            index < averageRate ? <StarFill className='text-warning' key={index} /> : <Star className='text-secondary' key={index} />
          ))}
          <span className='ms-2'><strong>{averageRate.toFixed(1)}</strong> ({comments.length})</span>
        </div>
        <h1 className='fs-2 pb-2'>{book.title}</h1>
        <Badge bg="secondary">{book.category}</Badge>
        <p className='fs-3 pt-2'>${book.price}</p>
      </Col>
      <Col xs={12} md={3}>
        <CommentArea data-testid='commentArea' asin={book.asin} comments={comments} handleUpdateCommentArea={handleUpdateCommentArea} />
      </Col>
    </Row>
  );
}