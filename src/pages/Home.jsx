import AllTheBooks from '../components/AllTheBooks'

export default function Home({ books, search }) {
  return (
    <AllTheBooks books={books} search={search} />
  )
}