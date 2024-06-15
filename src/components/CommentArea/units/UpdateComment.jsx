import { useState, useEffect } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import axios from '../../../modules/ApiAxios';

export default function UpdateCommentModal({ showModal, handleCloseModal, comment, handleUpdateComments }) {

  // Hooks
  const [inputValue, setInputValue] = useState(comment.comment);
  const [selectValue, setSelectValue] = useState(comment.rate.toString());

  useEffect(() => {
    setInputValue(comment.comment);
    setSelectValue(comment.rate.toString());
  }, [comment]);

  const rates = [1, 2, 3, 4, 5];

  // Update Review handler
  const handleUpdateReview = () => {
    const updatedReview = {
      'comment': inputValue,
      'rate': parseInt(selectValue),
      'elementId': comment.elementId
    };

    axios.put(`comments/${comment._id}`, updatedReview)
      .then(response => {
        handleUpdateComments(response.data);
        handleCloseModal();
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <textarea
          className='w-100'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Update your review"
        />
        <Dropdown onSelect={(e) => setSelectValue(e)}>
          <Dropdown.Toggle>
            {selectValue ? `Rate: ${selectValue}` : 'Update rate'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {rates.map(rate => (
              <Dropdown.Item key={rate} eventKey={rate.toString()}>{rate}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="warning" onClick={handleUpdateReview}>Update review</Button>
      </Modal.Footer>
    </Modal>
  );
}