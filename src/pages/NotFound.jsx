import { Link } from "react-router-dom";
import img404 from "../../public/404.svg"
import { Button } from 'react-bootstrap'
import { ChevronRight } from "react-bootstrap-icons";

export default function NotFound() {
  return (
    <div className="d-flex flex-column mb-4 pb-4 align-items-center justify-content-center w-75 m-auto">
        <img src={img404} alt="Error 404" className="w-50" />
        <h1 className="mb-4">Sorry, page not found</h1>
        <Button as={Link} to="/" className='primaryBg w-auto px-4 d-flex justify-content-center align-items-center border-0 py-3'>
          Go back to homepage
          <ChevronRight  className='ms-2'/>
        </Button>
    </div>
  )
}
