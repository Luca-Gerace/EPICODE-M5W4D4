import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

const AlltheBooks = (props, {search}) => {

  
  return (
    <>
      <Row>
        {props.books
          .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
          .map(book => <SingleBook key={book.asin} book={book} />)
        }
      </Row>
    </>
  )
}

export default AlltheBooks;


