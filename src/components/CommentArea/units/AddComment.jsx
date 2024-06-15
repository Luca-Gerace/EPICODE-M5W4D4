import { useState, useEffect } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import axios from '../../../modules/ApiAxios';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CommentModal({ asin, showModal, handleCloseModal, handleUpdateComments }) {

  // Hooks
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  
  useEffect(() => {
    axios.get(`books/${asin}/comments`)
    .then(response => setReviews(response.data));
  }, [asin]);
  
  const rates = [1, 2, 3, 4, 5];
  
  const handleCreateReview = () => {
    const newReview = {
      'comment': inputValue,
      'rate': parseInt(selectValue),
      'elementId': asin
    };

    axios.post('comments', newReview)
      .then(response => {
        setReviews([...reviews, response.data]);
        handleUpdateComments([...reviews, response.data]);
        setInputValue("");
        setSelectValue("");
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <textarea
          className='w-100'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a review"
        />
        <Dropdown onSelect={(e) => setSelectValue(e)}>
          <Dropdown.Toggle>
            {selectValue ? `Rate: ${selectValue}` : 'Add rate'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {rates.map(rate => (
              <Dropdown.Item key={rate} eventKey={rate.toString()}>{rate}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={handleCreateReview}>Add review</Button>
      </Modal.Footer>
    </Modal>
  );
}