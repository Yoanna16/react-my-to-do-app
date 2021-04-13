import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WelcomePage from './components/WelcomePage/WelcomePage'

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';





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
       <Header/>

       <Switch>
         
      <Route path="/" component={WelcomePage} />
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register} />
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
