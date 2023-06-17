import style from './Header.module.scss'
import svgBuble from '../../assets/images/blob.png'

const Header = () => {
    return(
        <header className={style.header}>
            <img src={svgBuble} alt="" className={style.svgBuble}/>

            <div className={style.box}>
                <div className={style.boxTitle}>
                    <h1>Cuisine</h1>
                    <h1>Du Monde</h1>
                </div>
                
                <button>Reservation</button>
            </div>
        </header>
    )
}

export default Header