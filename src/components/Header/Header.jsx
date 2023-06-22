import style from './Header.module.scss'
import svgBuble from '../../assets/images/blob.png'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'



const Header = () => {

    const [open, setOpen] = useState(false)
    const [showContent, setShowContent] = useState(false);
  
    const headerIn = useSpring({
        opacity: showContent ? 1 : 0,
        marginTop: showContent ? 0 : -100,
        delay: 340,

    });

    useEffect(() => {
        setShowContent(true);
    }, []);

    return(
        <>
            <animated.div style={headerIn}>
                <header className={style.header}>

                    <div className={style.apresentation}>

                        <img src={svgBuble} alt="" className={style.imgBuble}/>

                        <div className={style.description}>
                            <h1>Descubra o sabor do mundo inteiro com apenas um clique!</h1>
                            <h2>Bem-vindo ao Saveur Divine, o destino gastronômico que irá transportar você para um mundo de delícias culinárias. Se você está em busca de uma experiência única e inesquecível, você encontrou o lugar certo!</h2>
                        </div>

                    </div>

                    <div className={style.box}>

                        <div className={style.boxTitle}>
                            <h1>Cuisine</h1>
                            <h1>Du Monde</h1>
                        </div>

                        <button onClick={() => setOpen(!open)}>Reservation</button>
                    </div>
                </header>
                <Modal isOpen={open} actionName='reservation' setOpen={setOpen}/>
            </animated.div>
        </>
    )
}

export default Header