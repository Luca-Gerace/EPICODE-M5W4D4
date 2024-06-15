import AllTheBooks from '../components/Books/AllTheBooks'
import BookFilter from '../components/Books/BookFilter'
import Welcome from '../components/Welcome/Welcome'

export default function Home({ books, search, filter, handleFilter }) {
  return (
    <>
      <Welcome />
      <BookFilter filter={filter} handleFilter={handleFilter} />
      <AllTheBooks books={books} search={search} />
    </>
  )
}
