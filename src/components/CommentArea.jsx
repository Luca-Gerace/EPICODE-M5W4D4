import { useState, useEffect } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const url = 'https://striveschool-api.herokuapp.com/api/comments/';
const headers = {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmU2OTBiM2IyNTAwMTUxYjU1NzYiLCJpYXQiOjE3MTcyMzEzODIsImV4cCI6MTcxODQ0MDk4Mn0.cdURqpRo5x4tub6GqqUKI3x2ntlLGqOPaLj46UuQW-c",
  "Content-Type": "application/json"
};

function CommentArea({ asin, showModal, handleCloseModal }) {
  // Hooks
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [editingReview, setEditingReview] = useState(null);

  // Rates
  const rates = [1, 2, 3, 4, 5];

  useEffect(() => {
    // Fetch - GET
    fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, { headers })
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [asin]);

  // Create review handler
  const handleCreateReview = () => {
    const newReview = {
      'comment': inputValue,
      'rate': parseInt(selectValue),
      'elementId': asin
    };

    // Fetch - POST
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newReview),
    })
      .then(response => response.json())
      .then(data => setReviews([...reviews, data]));

    // Reset form fields
    setInputValue("");
    setSelectValue("");
  };

  // Edit review handler
  const handleEditReview = (review) => {
    setInputValue(review.comment);
    setSelectValue(review.rate.toString());
    setEditingReview(review);
  };

  // Update review handler
  const handleUpdateReview = () => {
    if (editingReview) {
      const updatedReview = {
        'comment': inputValue,
        'rate': parseInt(selectValue),
        'elementId': asin
      };

      // Fetch - PUT
      fetch(`${url}${editingReview._id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(updatedReview),
      })
        .then(response => response.json())
        .then(data => {
          const updatedReviews = reviews.map(r => r._id === editingReview._id ? data : r);
          setReviews(updatedReviews);
          setEditingReview(null);
          setInputValue("");
          setSelectValue("");
        });
    }
  };

  // Delete review handler
  const handleDeleteReview = (review) => {
    // Fetch - DELETE
    fetch(`${url}${review._id}`, {
      method: "DELETE",
      headers: headers,
    })
      .then(response => {
        if (response.ok) {
          setReviews(reviews.filter(r => r._id !== review._id));
        }
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Reviews <small>({reviews.length})</small></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ul>
          {reviews.map(review => (
            <li key={review._id}>
              {review.comment} - {review.rate}/{rates.length}
              <Button variant="warning" onClick={() => { handleEditReview(review) }}>
                <i className="bi bi-pencil-square pe-2"></i>
                Edit
              </Button>
              <Button variant="danger" onClick={() => { handleDeleteReview(review) }}>
              <i className="bi bi-trash pe-2"></i>
                Delete
              </Button>
            </li>
          ))}
        </ul>
        <textarea
          type="text"
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
        {editingReview ? (
          <Button variant="warning" onClick={handleUpdateReview}>Update review</Button>
        ) : (
          <Button variant="success" onClick={handleCreateReview}>Add review</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default CommentArea;