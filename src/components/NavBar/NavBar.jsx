import Reserve from '../Reserve/Reserve'
import style from './Navbar.module.scss'

const Navbar = ({ setOpen }) => {
   return(
      <nav className={style.nav}>
        <div className={style.name}>
            <h1>Saveur</h1>
            <h2>Divine</h2>
        </div>
        
        <div className={style.links}>
            <a href="http://" target="_blank" rel="noopener noreferrer">Menu</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
            <button className={style.loginButton} onClick={() => setOpen(!open)}>Log in</button>
        </div>
        <Reserve />
      </nav>
   ) 
}

export default Navbar