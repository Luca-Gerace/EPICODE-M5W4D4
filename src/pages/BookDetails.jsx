import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fantasy from '../data/fantasy.json';

function BookPage() {
  const { asin } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    // Recupero i dettagli del libro da fantasy.json
    const bookDetail = fantasy.find(b => b.asin === asin);
    setBook(bookDetail);
  }, [asin]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={book.img} alt={book.title} style={{ height: '400px' }} />
      <h1>{book.title}</h1>
      <p>Price: ${book.price}</p>
      <p>Category: {book.category}</p>
    </div>
  );
}

export default BookPage;
