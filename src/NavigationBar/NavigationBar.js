import './NavigationBar.css';

const NavigationBar = ({}) =>{

    return(
 <nav className='navbar_container'>
       <h1 className='boruca-weather'>Boruca Weather</h1>
        <div className='navbuttons'>
          <h3 className='nav-button'>|About|</h3>
          <h3 className='nav-button'>|Enviroment News|</h3>
          <h3 className='nav-button'>|Give us Feedback|</h3>
        </div>
  </nav>
     
    )
};
export default NavigationBar