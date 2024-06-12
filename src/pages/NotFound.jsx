import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
        <h1>Error 404</h1>
        <p>page not found</p>
        <Link to="/">Go back to homepage</Link>
    </>
  )
}
