import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import Headernew from './components/Header/Headernew';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WelcomePage from './components/WelcomePage/WelcomePage'

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';
import isAuth from './hoc/isAuth';




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="App">
       <AuthContext.Provider value={authInfo}>

       <Headernew/>

       <Switch>
         
      <Route path="/" component={WelcomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" render={() => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
      

      </Switch>
      <Footer/>
       </AuthContext.Provider>

    </div>
  );
}

export default App;
