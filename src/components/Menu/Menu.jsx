import style from './Menu.module.scss'
import img from '../../assets/images/logo.jpg'

const Menu = () => {

    const items = [
        {
            name: 'Torta de frango',
            price: 36.99,
            description: 'example dffsdfsd example example',
            img: img
        },
        {
            name: 'example',
            price: 340.99,
            description: 'example fsfple example example',
            img: img
        },
        {
            name: 'example',
            price: 32.99,
            description: 'example dsfsdfsd example example',
            img: img
        },
        {
            name: 'example',
            price: 10.99,
            description: 'example dsffsdfsd example example',
            img: img
        }
    ]

    const cardDish = items.map((item, index) => (
        <div key={index}>
            <div className={style.card}>
                <div className={style.cardDetails}>
                    <p className={style.textTitle}>Card title</p>
                    <p className={style.textBody}>Here are the details of the card</p>
                </div>
                <button className={style.cardButton}>$ {item.price}</button>
            </div>
        </div>
    ))

    return(
        <div className={style.container}>
            {cardDish}
        </div>
    )
}

export default Menu