import { Form } from 'react-bootstrap';

export default function BookFilter({ filter, handleFilter }) {
  return (
    <Form>
      <Form.Group controlId="filter">
        <Form.Label>Filter by Genre</Form.Label>
        <Form.Control as="select" value={filter} onChange={handleFilter}>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}