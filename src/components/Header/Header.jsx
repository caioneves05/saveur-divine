import style from './Header.module.scss'
import svgBuble from '../../assets/images/blob.png'
import Reserve from '../Reserve/Reserve'
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
                            <h1>Discover the taste of the whole world with just one click!</h1>
                            <h2>
                                Welcome to Saveur Divine, the culinary destination that will transport you to a world of culinary delights. If you are looking for a unique and unforgettable experience, you have found the right place!
                            </h2>
                        </div>

                    </div>

                    <div className={style.box}>

                        <div className={style.boxTitle}>
                            <h1>Cuisine</h1>
                            <h1>Du Monde</h1>
                        </div>

                        <button onClick={() => setOpen(!open)}><span>Reservation</span></button>
                    </div>
                </header>
                <Reserve isOpen={open} actionName='reservation' setOpen={setOpen}/>
            </animated.div>
        </>
    )
}

export default Header