import { Form } from 'react-bootstrap';

export default function BookFilter({ filter, handleFilter }) {
  return (
    <Form className='pt-2 pb-4 my-4'>
      <Form.Group controlId="filter" className='pt-2 mt-2 d-flex align-items-center'>
        <Form.Label className='me-3 mb-0'>Filter by book category:</Form.Label>
        <Form.Select value={filter} onChange={handleFilter} className='w-25'>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-Fi</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}