import style from './Carousel.module.scss'
import img from '../../assets/images/logo.jpg'

const Carousel = () => {

    const menu = [
        {
            name: 'example',
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

    const cardDish = menu.map((item, index) => (
        <div key={index}>
            <div className={style.card}>
                <h1>{item.name}</h1>
                <img src={item.img} alt="" />
                <p>{item.description}</p>
                <button>Buy ${item.price}</button>
            </div>
        </div>
    ))

    return(
        <div className={style.container}>
            {cardDish}
        </div>
    )
}

export default Carousel