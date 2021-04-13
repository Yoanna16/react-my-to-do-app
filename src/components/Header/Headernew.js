import { auth } from '../../utils/firebase'; 
import { Link } from 'react-router-dom'; 
import { useEffect, useContext } from 'react'; 
import AuthContext from '../../contexts/AuthContext';

import './Headernew.css'


const Headernew = () => {

    const {isAuthenticated, username} = useContext(AuthContext);
    
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }

      /*  auth.currentUser.getIdToken()
            .then(function (idToken) {
                return fetch('http://localhost:5001', {
                    headers: {
                        'Authorization': idToken
                    }
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }); */


    }, [isAuthenticated])


    return (
      <header className="header">
          <div className="topnav">

            {isAuthenticated ? <Link to="/" className="my-to-dos-button logo">PLANUM</Link> : ""}
            {isAuthenticated ? <Link to="/todos" className="my-to-dos-button">My To Do's</Link> : ""}
            {isAuthenticated ?  <Link to="/create" className="my-to-dos-button">Create</Link> : ""}
            


          <div className="topnav-right">
          {  isAuthenticated
                    ?                   <Link to="/logout"  className="my-to-dos-button">Logout</Link> 
                    : ""
                  }
                  {
                      !isAuthenticated ?   <Link to="/register" className="my-to-dos-button">Register</Link> : ""
                  }
                  {
                      !isAuthenticated ? <Link to="/login" className="my-to-dos-button">Login</Link> : ""
                  }
          </div>
          </div>

      </header>

    )
}

export default Headernew;