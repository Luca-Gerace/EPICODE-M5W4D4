import { useState, useEffect } from 'react';
import { Button, Dropdown, Accordion } from 'react-bootstrap';

const url = 'https://striveschool-api.herokuapp.com/api/comments/';
const headers = {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmU2OTBiM2IyNTAwMTUxYjU1NzYiLCJpYXQiOjE3MTcyMzEzODIsImV4cCI6MTcxODQ0MDk4Mn0.cdURqpRo5x4tub6GqqUKI3x2ntlLGqOPaLj46UuQW-c",
  "Content-Type": "application/json"
};

export default function CommentArea({ status, asin }) {
  // Hooks
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  // Rates
  const rates = [1, 2, 3, 4, 5];

  useEffect(() => {
    // Fetch - GET
    fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, { headers })
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [asin]);

  // New review handler
  const handleNewReview = () => {
    const newReview = {
      'comment': inputValue,
      'rate': selectValue,
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

  return (
    <Accordion defaultActiveKey={status}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews <small>({reviews.length})</small></Accordion.Header>
        <Accordion.Body>
          <ul>
            {reviews.map(review => (
              <li key={review._id}>{review.comment} - {review.rate}/{rates.length}</li>
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
          <Button onClick={handleNewReview}>Add review</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
