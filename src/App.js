import React, { useEffect } from 'react';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          id: user.uid,
          email: user.email
        }))
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        )}
        
      </Router>
    </div>
  );
}

export default App;
