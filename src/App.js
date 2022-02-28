import React from 'react';
import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { connect } from 'react-redux';
import { onSnapshot } from 'firebase/firestore';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import CredentialsPage from './pages/credentialspage/credentialspage.component';
import { createUserProfileDocument, fsAuth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  componentDidMount() {
    this.unsubscribeFromAuth = fsAuth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='checkout' element={<CheckoutPage/>}/>
            <Route path='signin' element={this.props.currentUser ? <Navigate to='/'/> : <CredentialsPage/>}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
