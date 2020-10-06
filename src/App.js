import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import MainFirst from "./components/Main/Main";
import { firstMain, secondMain } from "./databases/Data"

function App() {
  return (
    <div className="App">
      <Header />
      <MainFirst {...firstMain} />
      <MainFirst {...secondMain} />

    </div>
  );
}

export default App;
