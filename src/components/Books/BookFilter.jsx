import { Form } from 'react-bootstrap';

export default function BookFilter({ filter, handleFilter }) {
  return (
    <Form className='my-4'>
      <Form.Group controlId="filter" className='d-flex align-items-center rounded-pill'>
        <Form.Label className='me-3 mb-0'>Filter by book category:</Form.Label>
        <Form.Select value={filter} onChange={handleFilter} className='rounded-pill w-25'>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}