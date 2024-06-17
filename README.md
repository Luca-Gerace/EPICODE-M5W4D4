# Epibooks
Questo progetto mira a replicare un sito per la gestione di review su libri.

## Installazione e Avvio 🚀
Per eseguire questo progetto in locale, segui questi passaggi:
1. Clona il repository: `git clone https://github.com/Luca-Gerace/EPICODE-M5W5D4.git`
2. Carica la folder sul tuo IDE di fiducia
3. Entra da terminale nella folder: `cd EPICODE-M5W5D4`
4. Lancia l'installazione dei pacchetti necessari al funzionamento dell'app: `npm -i`
5. Lancia il comando per runnare il progetto in locale: `npm run dev`
6. Naviga l'app su browser al seguente indirizzo: `http://localhost:5173/`
7. Per eseguire i test unitari lancia il seguente comando: `npm test`


## Obiettivi 🎯
- Realizzare una Single Page Application
- Utilizzare react-router-dom per navigare le pagine dell'app
- Fare chiamate AJAX per creare, aggiornare e eliminare commenti/review su ogni singolo libro
- Utilizzare react-testing-library per testare il funzionamento di alcune feature e componenti presenti nell'app

## Tecnologie Utilizzate 💻
- React + Vite ⚡️
- React Bootstrap components 🎨

## Extra ✨
- Creazione di un filtro per visualizzare un determinato genere di libri
- Creazione di una search bar per filtrare la visualizzazione dei libri in base al testo innserito
- Creazione delle modali per la creazione/aggiornamento/cancellazione delle review
- Gestione della pagine d'errore (404)
- Creazione di un toggle per la gestione centralizzata del tema (light/dark) con l'utilizzo di un react context