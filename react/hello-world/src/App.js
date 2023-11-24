import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld.js';
import CityList from './components/CityList.js';
import Student from './components/Student.js';
import Section from './components/Section.js';
import ComponentWithChildren from './components/AggiungiComponente.js';
import Solution from './components/AggiungiComponente.js';

function App() {
  return (
    <div className="App">
      <Solution additionalText="Testo aggiuntivo">
        <p>Contenuto children</p>
      </Solution>
      <Solution Solution additionalText="solo se c'è il primo children">
        <Section title="Contenuto title">Contenuto children</Section>
      </Solution>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld />
        <CityList />
      </header>
      <Student />
      <ComponentWithChildren additionalText="Testo aggiuntivo">
        <h2>Contenuto children</h2>
      </ComponentWithChildren>
    </div>
  );
}

export default App;




//creazione  di una funzione per aggiungere codice javascript react 
//dopo la creazione riportare il nome della funzione all'interno di un tag 
// dentro la funzione App per poterla visionare a schermo...in teoria non andrebbe
//qui sotto, ma è consigliabile inserire le funcition in file secondari 
