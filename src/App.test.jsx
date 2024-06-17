/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import fantasy from  './data/fantasy.json'
import romance from  './data/romance.json'

// Test che verifica la presenza del testo "Welcome"
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

// Verifico il corretto funzionamento della searchbar
test("filtra i libri a seconda del testo inserito in searchbar e verifica la presenza di card", async () => {
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
test("al click sulla card il suo bordo diventi rosso", () => {
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

  // Simulo il click sulla seconda card
  fireEvent.click(secondCard);

  // Mi aspetto che la prima card non abbia più il bordo rosso
  expect(firstCard).not.toHaveClass('border-danger');
  // e che il bordo rosso l'abbia la seconda card
  expect(secondCard).toHaveClass('border-danger');
});


// TEST EXTRA

// Verifico il corretto funzionamento del filtro
test("filtra i libri per categoria 'romance' e verifica la presenza di card", () => {
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