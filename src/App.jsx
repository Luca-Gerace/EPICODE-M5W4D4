import { useState } from 'react';
import AllTheBooks from './components/AllTheBooks'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'
import { Container } from 'react-bootstrap';

function App() {

  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <>
      <Header search={search} handleSearch={handleSearch} />
      <Container>
        <AllTheBooks books={fantasy} />
      </Container>
      <Footer />
    </>
  )
}

export default App