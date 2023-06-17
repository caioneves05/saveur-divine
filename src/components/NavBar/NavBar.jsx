import style from './Navbar.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
   return(
      <nav className={style.nav}>
        <div className={style.name}>
            <h1>Saveur</h1>
            <h2>Divine</h2>
        </div>
        
        <div className={style.links}>
            <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Menu</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
            <button className={style.cartButton}> < FaShoppingCart size={27} /> </button>
            <button className={style.loginButton}>Log in</button>
        </div>
      </nav>
   ) 
}

export default Navbar