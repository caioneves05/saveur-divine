import style from './Navbar.module.scss'
import logoSaveur from '../../assets/images/Saveur.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const handleMenuClick = () => {
    const menuField = document.getElementById('menuField')
    menuField.scrollIntoView({behavior: 'smooth'})
  }

   return(
    <>
      <nav className={style.nav}>
        <div className={style.name}>
            <img src={logoSaveur} alt="Logo" />
        </div>
        
        <div className={style.links}>
            <Link
            href="#menuField" 
            rel="noopener noreferrer" 
            onClick={handleMenuClick}
            smooth={true}
            duration={500}
            offset={-70}
            >Menu</Link>
            <a href="http://">Contact us</a>
        </div>
      </nav>
    </>
   ) 
}

export default Navbar