import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shoppage/shoppage.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />}/>
          <Route path='shop' element={<ShopPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
