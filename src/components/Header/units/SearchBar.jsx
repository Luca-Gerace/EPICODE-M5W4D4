import { Form } from 'react-bootstrap'

export default function SearchBar({ search, handleSearch }) {

  return (
    <>
        <Form.Group>
            <Form.Control 
                className='rounded-pill'
                type='search' 
                placeholder='Search a book...' 
                value={search} 
                onChange={handleSearch} 
            />
        </Form.Group>
    </>
  )
}