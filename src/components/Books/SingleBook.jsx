import { useContext } from 'react';
import { Badge, Button, Card, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ChevronRight } from 'react-bootstrap-icons';
import Context from '../../modules/Context';

export default function SingleBook({ book, isSelected, handleCardClick }) {

  // Url per navigare la pagina bookdetails
  const bookPageUrl = `/book/${book.asin}`;

  const { theme } = useContext(Context);

  return (
    <Col xs={12} md={6} lg={3} className='pb-4'>
      <Card
        role="button"
        data-testid='card'
        onClick={handleCardClick} 
        className={`book-cover d-flex flex-column p-4 border-2 ${isSelected ? 'border-danger' : ''} bg-theme-${theme} shadow`}
      >
        <Card.Img 
          variant="top" 
          src={book.img}
          className='object-fit-cover' 
          style={{ height: '400px'}} 
        />
        <Card.Body className='px-0 pb-0'>
          <Card.Title className='fs-6 text-nowrap overflow-x-hidden m-0'>{book.title}</Card.Title>
          <div className='d-flex align-items-center justify-content-between py-3'>
            <Card.Text className='fs-6 fw-bold m-0'>${book.price}</Card.Text>
            <Badge bg="secondary">{book.category}</Badge>
          </div>
          <Button className='primaryBg w-100 d-flex justify-content-center align-items-center border-0 py-3' as={Link} to={bookPageUrl}>
            View book details
            <ChevronRight  className='ms-2'/>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}