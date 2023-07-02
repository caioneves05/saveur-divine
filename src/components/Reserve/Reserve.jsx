import style from './Reserve.module.scss'
import reservationSvg from'../../assets/images/reservation.svg'
import { useForm } from 'react-hook-form'

const Reserve = ({ isOpen, actionName, setOpen }) => {

    const { register, handleSubmit } = useForm()

    const submitForm = (e) => {
        console.log(e)
    }

    if(isOpen && actionName === 'reservation') {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    
                    <div className={style.apresentationModal}>
                        <img src={reservationSvg} alt="" className={style.modalSvg}/>
                        <button onClick={() => setOpen(!isOpen)}>Close</button>
                    </div>

                    <form action="" className={style.form} onSubmit={handleSubmit(submitForm)}>
                        <h2>Make your {actionName} right now!</h2>

                        <label htmlFor="">Email</label>
                        <input type="email" {...register('email')} placeholder='you@example.com'/>
            
                        <label htmlFor="">Password</label>
                        <input type="password" {...register('password')} placeholder='At least 8 characters'/>

                        <label htmlFor="">Date</label>
                        <input type="date" {...register('date')} placeholder='01/02/2023'/>

                        <label htmlFor="">Time</label>
                        <input type="time" {...register('time')}/>

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

export default Reserve