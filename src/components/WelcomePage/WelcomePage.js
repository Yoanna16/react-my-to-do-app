import { auth } from '../../utils/firebase'; 
import { Link } from 'react-router-dom'; 
import { useEffect, useContext } from 'react'; 
import AuthContext from '../../contexts/AuthContext'; 

import './WelcomePage.css'

const WelcomePage = () => {
     
    const {isAuthenticated, username} = useContext(AuthContext);

    return (
        <div className="welcome-page">
            {/*when user is not authenticated  */}
            <h1 className="welcome-title"> WELCOME TO PLANUM</h1> 
             {/*some description for the app */}
           
            <p className="description">
            Planum is a note - taking service that allows you to keep track of your plan
            for the day! All tasks for the day or the week gathered in one place!
            <p>Easy and convenient - this is PLANUM!</p>
            </p>
            <Link to="/login" className="get-started-button">Get Started</Link>
        </div>
    )
}

export default WelcomePage