import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage}></Route>
      </switch>
    </div>
  );
}

export default App;
