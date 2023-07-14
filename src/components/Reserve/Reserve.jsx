import style from './Reserve.module.scss'
import reservationSvg from'../../assets/images/reservation.svg'
import { useForm } from 'react-hook-form'
import QRCode from 'react-qr-code'
import { useState } from 'react'


const Reserve = ({ isOpen, actionName, setOpen }) => {

    const [QRcode, setQRcode] = useState()
    const { register, handleSubmit } = useForm()


    const submitForm = (e) => {
        console.log(e)
    }

    if(isOpen && actionName === 'reservation') {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    
                {!QRcode ? (
                    <>
                        <div className={style.apresentationModal}>
                            <img src={reservationSvg} alt="" className={style.modalSvg}/>
                            <button onClick={() => {
                                setOpen(!isOpen)
                                setQRcode(false)
                            }}>Close</button>
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

                            <button onClick={() => setQRcode(true)} value={QRcode}>Reserve</button>
                        </form>
                    </>
                ) : (
                    <>
                        <div>
                            <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={'Olá'}
                            viewBox={`0 0 256 256`}
                            />
                            <button onClick={() => {
                                    setOpen(!isOpen)
                                    setQRcode(false)
                            }}>Close</button>
                        </div>
                    </>
                )}      
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
//https://codesandbox.io/s/s9kp97?file=/demo.tsx:804-821
//https://mui.com/material-ui/react-progress/
export default Reserve