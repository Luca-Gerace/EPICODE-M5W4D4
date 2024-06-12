// import React from 'react'
import { Form } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
export default function SearchBar({ search, handleSearch }) {

  return (
    <>
        <Form.Group className='mb-3'>
            <Form.Control 
                type='search' 
                placeholder='cerca un libro' 
                value={search} 
                onChange={handleSearch} 
            />
        </Form.Group>
    </>
  )
}