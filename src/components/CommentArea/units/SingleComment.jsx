import { Button, Col, Row } from 'react-bootstrap';
import { Calendar, PencilSquare, PersonCircle, Star, StarFill, Trash } from 'react-bootstrap-icons';
import Context from '../../../modules/Context';
import { useContext } from 'react';
import { format } from 'date-fns';

export default function SingleComment({ review, handleEditReview, handleDeleteReview }) {
  
  const { user } = useContext(Context)
  const rate = parseInt(review.rate);

  // Funzione per formattare la data
  const formatDateTime = (dateTimeString) => {
    const formattedDate = format(new Date(dateTimeString), "yyyy-MM-dd 'at' HH:mm");
    return formattedDate;
  };

  return (
    <Row className=' pt-3 mt-2 border-top'>
      <Col xs={10}>
        <div className='d-flex justify-content-start align-items-center pb-2'>
          <PersonCircle className='me-2' /> 
          <small>{review.author}</small>
        </div>
        <p data-testid='comment' className='fw-bold m-0 pb-2'>{review.comment}</p>
        <div className='d-flex justify-content-start align-items-center pb-3'>
          {Array.from({ length: 5 }).map((el, index) => (
            index < rate ? <StarFill className='text-warning' key={index} /> : <Star className='text-secondary' key={index}/>
          ))}
        </div>
        <div className='d-flex justify-content-start align-items-center pb-2'>
          <Calendar className='me-2' /> 
          <small>{formatDateTime(review.updatedAt)}</small>
        </div>
      </Col>
      <Col xs={2}>
        {review.author === user.email && (
          <div className='d-flex justify-content-between align-items-center flex-column'>
            <Button className='text-white d-flex justify-content-center align-items-center mb-4 mb-md-3' variant="warning" onClick={() => handleEditReview(review)}>
              <PencilSquare />
            </Button>
            <Button className='d-flex justify-content-center align-items-center' variant="danger" onClick={() => handleDeleteReview(review)}>
              <Trash />
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
}