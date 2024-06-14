import AllTheBooks from '../components/AllTheBooks'
import Filter from '../components/Filter'
import Welcome from '../components/Welcome/Welcome'

export default function Home({ books, search, filter, handleFilter }) {
  return (
    <>
      <Welcome />
      <Filter filter={filter} handleFilter={handleFilter} />
      <AllTheBooks books={books} search={search} />
    </>
  )
}
