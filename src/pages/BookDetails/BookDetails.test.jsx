/* eslint-disable no-undef */
import BookDetails from "./BookDetails";
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Libro mockato da passare alla pagina book details
const mockBooks = [
    {
        asin: "0316438960",
        title: "The Last Wish: Introducing the Witcher",
        img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
        price: 9.59,
        category: "fantasy"
    },
];

// Test che verifica la presenza del componente comment area 
test("La pagina monta il componente comment area", () => {
    render(
        // Memory router che simula la navigazione di una specifica pagina
        <MemoryRouter initialEntries={['/book/0316438960']}>
            <Routes>
                <Route path="/book/:asin" element={<BookDetails books={mockBooks} />} />
            </Routes>
        </MemoryRouter>
    );

    // Cerco il componente comment area e verifico che ci sia nel documento
    const commentArea = screen.getByTestId('commentArea');
    expect(commentArea).toBeInTheDocument();
});

// Test che verifica la presenza dei singoli commenti nel componente comment area 
test("La pagina monta i singoli commenti nel componente comment area", async () => {
    render(
        <MemoryRouter initialEntries={['/book/0316438960']}>
            <Routes>
                <Route path="/book/:asin" element={<BookDetails books={mockBooks} />} />
            </Routes>
        </MemoryRouter>
    );

    // Cerco i singoli commenti all'interno di CommentArea
    const comments = await screen.findAllByTestId('comment');
    
    // Verifica che almeno un commento sia presente
    expect(comments.length).toBeGreaterThan(0);
});