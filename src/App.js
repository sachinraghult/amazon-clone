import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {

      if(authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;