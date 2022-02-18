import './NavigationBar.css';
import { Link } from 'react-router-dom';
const NavigationBar = ({}) =>{

    return(
 <nav className='navbar_container'>
       <h1 className='boruca-weather'> Boruca Weather</h1>
       
        <div className='navbuttons'>
        <Link to='/homepage'>
          <h3 className='nav-button'>|Home|</h3>
          </Link>
        <Link to="/aboutsection">
          <h3 className='nav-button'>|About|</h3>
        </Link>
        
          <Link to="/feedback-page">
          <h3 className='nav-button'>|Give us Feedback|</h3>
          </Link>
        </div>
  </nav>
     
    )
};
export default NavigationBar


       