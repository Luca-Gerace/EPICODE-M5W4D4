import { useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import axios from '../../../modules/ApiAxios';

export default function CommentModal({ asin, showModal, handleCloseModal, handleUpdateCommentArea }) {

  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const rates = [1, 2, 3, 4, 5];

  const handleCreateReview = () => {
    const newReview = {
      'comment': inputValue,
      'rate': parseInt(selectValue),
      'elementId': asin
    };

    axios.post(`comments`, newReview)
      .then(response => {
        handleUpdateCommentArea(prevComments => [...prevComments, response.data]);
        setInputValue("");
        setSelectValue("");
        handleCloseModal();
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
          required
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
        <Button className='w-100 py-2' variant="success" onClick={handleCreateReview}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}