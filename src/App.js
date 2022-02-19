import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />}/>
          <Route path='hats' element={<HatsPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
