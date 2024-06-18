import { createContext } from "react";

const Context = createContext({
    user: {},
    theme: 'light', // tema di default
    toggleTheme: () => {}, // Funzione per switch del tema
});

export default Context;