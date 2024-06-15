import { createContext } from "react";

const Context = createContext({
    user: {},
    theme: 'light', // Default theme
    toggleTheme: () => {}, // Function to toggle theme
});

export default Context;