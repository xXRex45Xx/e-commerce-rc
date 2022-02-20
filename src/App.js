import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
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
