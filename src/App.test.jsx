/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import fantasy from './data/fantasy.json'
import romance from './data/romance.json'

// Workaroud trovato su stackoverflow
// https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};


// Verifico la presenza del testo "Welcome"
test("Il componente ha il testo Welcome", () => {
  render(<App />);

  const welcomeText = screen.getByText(/welcome/i);

  expect(welcomeText).toBeInTheDocument();
});

// Verifico la presenza delle card nel documento
test("Presenza di 150 card nel documento", () => {
  render(<App />);

  // Cerco le card nel documento
  const cards = screen.getAllByText(/View book details/i);

  // Verifico che ci siano 150 card nel documento
  expect(cards.length).toBe(fantasy.length);
});

// Verifico che al caricamento della pagina non ci siano istanze di commentArea
test("Non sono presenti istanze di CommentArea al caricamento della pagina", () => {
  render(<App />);

  // Utilizzo queryByTestId che mi ritorna null se non trova l'elemento
  const commentArea = screen.queryByTestId('OffcanvasCommentArea');
  expect(commentArea).not.toBeInTheDocument();
});

// Verifico il corretto funzionamento della searchbar
test("Filtro i libri a seconda del testo inserito in searchbar e verifico la presenza di card", async () => {
  // Renderizziamo il componente App
  render(<App />);

  // Cerco il contenitore della searchBar
  const searchBar = document.querySelector('.searchBar');

  // Simula la digitazione del testo 'Sword' nella search bar
  fireEvent.change(searchBar, { target: { value: 'Sword' } });

  // Cerco le card nel documento con il testo 'Sword'
  const cards = await screen.findAllByText(/Sword/i);

  // Verifica che ci siano 9 card nel documento
  expect(cards.length).toBe(9);
});

// Verifico che al click sulla card il suo bordo diventi rosso
test("Clicco sulla prima card e verifico che il suo bordo sia rosso", async () => {
  // Renderizziamo il componente App
  render(<App />);

  // Cerco le card
  const cards = await screen.findAllByTestId('card');

  // Seleziono la prima card
  const firstCard = cards[0];

  // Simulo il click sulla prima card
  fireEvent.click(firstCard);

  // Mi aspetto che la prima card abbia il bordo rosso
  expect(firstCard).toHaveClass('border-danger');
});

// Verifico che al click sulla seconda card il bordo della prima ritorni normale
test("Clicco sulla prima card, chiudo l'offcanvas e verifico che il suo bordo non sia più rosso", async () => {
  // Renderizziamo il componente App
  render(<App />);

  // Cerco le card
  const cards = screen.getAllByTestId('card');
  const firstCard = cards[0]; // Selezione la prima card
  const secondCard = cards[1]; // Selezione la prima card

  // Simulo il click sulla prima card
  fireEvent.click(firstCard);

  // Mi aspetto che la prima card abbia il bordo rosso
  expect(firstCard).toHaveClass('border-danger');

  // Cerco il bottone di chiusura dell'Offcanvas
  const offcanvasCloseBtn = document.querySelector('.offcanvas-header button');

  // Simulo il click sulla bottone di chiusura dell'Offcanvas
  fireEvent.click(offcanvasCloseBtn);

  // Mi aspetto che la prima card non abbia più il bordo rosso
  expect(firstCard).not.toHaveClass('border-danger');

  // Simulo il click sulla seconda card
  fireEvent.click(secondCard);

  // Mi aspetto che la seconda card abbia il bordo rosso
  expect(secondCard).toHaveClass('border-danger');
});

// Ultimi due test su 'src/pages/BookDetails/BookDetails.test.jsx'

/* TEST EXTRA */

// Verifico il corretto funzionamento del filtro
test("Filtro i libri per categoria 'romance' e verifico la presenza di card", () => {
  // Renderizziamo il componente App
  render(<App />);

  // Cerco la select del filtro nel documento
  const filterSelect = screen.getByTestId('filter');

  // Cambiamo il valore del filtro a "romance"
  fireEvent.change(filterSelect, { target: { value: 'romance' } });

  // Cerco gli elementi con classe 'badge' nel documento
  const badges = document.getElementsByClassName('badge');

  // Converto in un array e uso forEach per verificare il contenuto dei badge
  Array.from(badges).forEach(badge => {
    expect(badge.textContent.toLowerCase()).toBe('romance');
  });

  // Verifica che il numero di badge (e di conseguenza di card) sia uguale al numero di libri in romance.json
  expect(badges.length).toBe(romance.length);
});

// Verifico il corretto funzionamento del toggle per lo switch del tema
test("Verifico il toggle per lo switch del tema", () => {
  // Renderizziamo il componente App
  render(<App />);

  // Cerco il toggle button
  const toggle = screen.getByTestId('toggle');

  // Simulo il click sul toggle
  fireEvent.click(toggle);

  // Cerco il body
  const body = document.querySelector('body');

  // Mi aspetto che il tag body abbia la classe per gestire il dark theme
  expect(body).toHaveClass('bg-theme-dark');
});