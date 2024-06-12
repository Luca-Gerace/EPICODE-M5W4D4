import { useState } from 'react';
import { Badge, Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea';

export default function SingleBook({ book }) {

  // Hooks
  const [showModal, setShowModal] = useState(false);

  // Card handler
  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Col xs={12} md={6} lg={3} className='pb-4'>
      <Card
        role="button" 
        className={`book-cover d-flex flex-column p-4 border-2 ${showModal ? 'border-danger' : ''}`}
        onClick={handleCardClick} 
      >
        <Card.Img 
          variant="top" 
          src={book.img}
          className='object-fit-cover' 
          style={{ height: '400px'}} 
        />
        <Card.Body className='px-0 pb-0'>
          <Card.Title className='fs-6 text-nowrap overflow-x-hidden'>{book.title}</Card.Title>
          <div className='d-flex align-items-center justify-content-between pt-2'>
            <Card.Text className='fs-6 fw-bold m-0'>${book.price}</Card.Text>
            <Badge bg="secondary">{book.category}</Badge>
          </div>
        </Card.Body>
      </Card>
      <CommentArea asin={book.asin} showModal={showModal} handleCloseModal={handleCloseModal} />
    </Col>
  );
}