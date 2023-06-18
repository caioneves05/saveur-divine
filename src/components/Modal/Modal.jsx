import style from './Modal.module.scss'
import reservationSvg from'../../assets/images/reservation.svg'

const Modal = ({ isOpen, actionName, setOpen }) => {

    if(isOpen && actionName === 'reservation') {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    
                    <div className={style.apresentationModal}>
                        <img src={reservationSvg} alt="" className={style.modalSvg}/>
                        <button onClick={() => setOpen(!isOpen)}>Close Modal</button>
                    </div>

                    <form action="" className={style.form}>
                        <h2>Make your {actionName} right now!</h2>

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='you@example.com'/>
            
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='At least 8 characters'/>

                        <label htmlFor="">Date</label>
                        <input type="date"/>

                        <label htmlFor="">Time</label>
                        <input type="time"/>

                        <button type='submit'>Send</button>
                    </form>

                    
                </div>
            </div>
        )
    }
    else {
        return(
            <></>
        )
    }
}

export default Modal