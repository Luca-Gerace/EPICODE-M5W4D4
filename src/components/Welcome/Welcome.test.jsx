/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

// Test che verifica la presenza del testo "Welcome"
test("Il componente ha il testo Welcome", () => {
  render(<Welcome />);

  const welcomeText = screen.getByText(/welcome/i);

  expect(welcomeText).toBeInTheDocument();
});