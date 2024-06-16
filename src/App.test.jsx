/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App from "./App";

// Questo è un test che verifica se il contatore viene inizializzato correttamente con il valore 0
test("rende il contatore con valore iniziale 0", () => {
  render(<App />);

  // Cerchiamo tutti gli elementi nel documento che contengono il testo "View book details"
  const cards = screen.getAllByText(/View book details/i);

  // Verifichiamo che ci siano 150 elementi nel documento
  expect(cards.length).toBe(150);
});