import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

const AlltheBooks = ({ books, search }) => {
  
  return (
    <>
      <Row>
        {books
          .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
          .map(book => <SingleBook key={book.asin} book={book} />)
        }
      </Row>
    </>
  )
}

export default AlltheBooks;


