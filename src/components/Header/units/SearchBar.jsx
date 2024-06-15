import { Form } from 'react-bootstrap'

export default function SearchBar({ search, handleSearch }) {

  return (
    <>
        <Form.Group>
            <Form.Control 
                type='search' 
                placeholder='Search a book...' 
                value={search} 
                onChange={handleSearch} 
            />
        </Form.Group>
    </>
  )
}