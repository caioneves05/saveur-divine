import style from './Menu.module.scss'
import img from '../../assets/images/A.jpg'

const Menu = () => {

    const items = [
        {
            name: 'Croque-Monsieur',
            price: 36.99,
            description: "It's a simple but delicious dish, usually served hot and au gratin in the oven.",
            img: img
        },
        {
            name: 'Quiche Lorraine',
            price: 340.99,
            description: 'A versatile option that can be served for breakfast, brunch or as a dinner entree.',
        },
        {
            name: 'Coq au Vin',
            price: 32.99,
            description: 'The chicken is cooked until tender and juicy, absorbing the rich flavors of the wine and other ingredients.',
        },
        {
            name: 'Crème Brûlée',
            price: 10.99,
            description: "It is served cold and is one of the most popular desserts in France.",
        }
    ]

    const cardDish = items.map((item, index) => (
        <div key={index}>
            <div className={style.card}>
                <div className={style.cardDetails}>
                    <img src={item.img} alt="" className={style.imgCard}/>
                    <p className={style.textTitle}>{item.name}</p>
                    <p className={style.textBody}>{item.description}</p>
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