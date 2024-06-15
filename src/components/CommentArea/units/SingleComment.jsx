import { Button, Col, Row } from 'react-bootstrap';
import { Calendar, PencilSquare, PersonCircle, Star, StarFill, Trash } from 'react-bootstrap-icons';

export default function SingleComment({ review, handleEditReview, handleDeleteReview }) {
  
  const rate = parseInt(review.rate);

  return (
    <Row>
      <Col xs={ review.author === 'geraceluca91@gmail.com' ? 10 : 12}>
        <div className='d-flex justify-content-start align-items-center pb-2 pt-3 mt-2 border-top'>
          <PersonCircle className='me-2' /> 
          <small>{review.author}</small>
        </div>
        <p className='fw-bold m-0 pb-2'>{review.comment}</p>
        <div className='d-flex justify-content-start align-items-center pb-3'>
          {Array.from({ length: 5 }).map((el, index) => (
            index < rate ? <StarFill className='text-warning' key={index} /> : <Star className='text-black-50' key={index}/>
          ))}
        </div>
        <div className='d-flex justify-content-start align-items-center pb-2'>
          <Calendar className='me-2' /> 
          <small>{review.updatedAt}</small>
        </div>
      </Col>
      {review.author === 'geraceluca91@gmail.com' && (
        <Col xs={2}>
            <div className='d-flex justify-content-between align-items-center flex-column'>
              <Button className='text-white d-flex justify-content-center align-items-center mb-2' variant="warning" onClick={() => handleEditReview(review)}>
                <PencilSquare />
              </Button>
              <Button className='d-flex justify-content-center align-items-center' variant="danger" onClick={() => handleDeleteReview(review)}>
                <Trash />
              </Button>
            </div>
        </Col>
      )}
    </Row>
  );
}