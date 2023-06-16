import './NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
   return(
      <>
      <nav className="nav-box">
        <div className="name-box">
            <h1>Saveur</h1>
            <h2>Divine</h2>
        </div>
        <div className="box-links">
            <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Menu</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
            <button className="cart-button"> < FaShoppingCart size={20} color="orange" /> </button>
            <button className="login-button">Log in</button>
        </div>
      </nav>
      </>
   ) 
}

export default NavBar