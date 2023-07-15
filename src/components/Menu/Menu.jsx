import style from './Menu.module.scss'

import imgCanard from '../../assets/images/confit-canard.jpg'
import imgCassoulet from '../../assets/images/cassoulet.jpg'
import imgRatatouille from '../../assets/images/ratatouille.jpg'
import imgBullet from '../../assets/images/cremeBullet.jpg'
import { useRef } from 'react'

const Menu = () => {

    const menuFieldRef = useRef(null)

    const items = [
        {
            name: 'Confit canard',
            price: 36.49,
            description: "Also known as duck confit, it originates from Gascony, in southwestern France.",
            img: imgCanard
        },
        {
            name: 'Cassoulet',
            price: 54.99,
            description: "Cassoulet is a multi-meat stew with white beans and is one of France's most popular foods.",
            img: imgCassoulet
        },
        {
            name: 'Ratatouille',
            price: 25.99,
            description: 'Popularized by the Disney movie and perfect for a romantic candlelit dinner',
            img: imgRatatouille
        },
        {
            name: 'Crème Brûlée',
            price: 10.99,
            description: "Dessert is nothing more than a sweet cream of eggs baked in a water bath.",
            img: imgBullet
        }
    ]

    const cardDish = items.map((item, index) => (
        <div key={index}>
            <div className={style.card}>
                <div className={style.cardDetails}>
                    <p className={style.textTitle}>{item.name}</p>
                    <img src={item.img} alt="" className={style.imgCard}/>
                    <p className={style.textBody}>{item.description}</p>
                </div>
                <button className={style.cardButton}>$ {item.price}</button>
            </div>
        </div>
    ))

    return(
        <div className={style.container} ref={menuFieldRef} id="menuField">
            {cardDish}
        </div>
    )
}

export default Menu