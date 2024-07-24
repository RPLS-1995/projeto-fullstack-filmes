// src/App.js
import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Aplicação React</h1>
        <ExampleComponent />
      </header>
    </div>
  );
}

export default App;
