import style from './Reserve.module.scss'
import reservationSvg from'../../assets/images/reservation.svg'
import checkQRCode from '../../assets/images/checkQrcode.svg'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import QRCode from 'react-qr-code'

import * as yup from 'yup'

const Reserve = ({ isOpen, setOpen }) => {

    const [QRcode, setQRcode] = useState()
    const [haveReservation, setHaveReservation] = useState(false)

    const schema = yup.object({
        email: yup
          .string()
          .email('Invalid Email')
          .required('This  Email is required'),
          codeReserve: yup
          .string()
          .min(8,'This Reservation Code field is required min 8 characters')
          .required('This field is required'),
        date: yup
          .string()
          .required('Please choose a date'),
        time: yup
          .string()
          .test(
            'not empty',
            'Please choose the time for your reservation.',
            function(value) {
              return !!value;
            }
          )
          .required('Please choose the time for your reservation'),
      })


    const { register, handleSubmit: onSubmit, formState: {errors, isValid} } = useForm({
        resolver: yupResolver(schema)
    })
    
    const handleSubmit = (data) => {
        console.log(data)
    }

    if(isOpen) {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    
                {!QRcode && !haveReservation ? (
                    <>
                        <div className={style.apresentationModal}>
                            <img src={reservationSvg} alt="" className={style.modalSvg}/>
                            <button onClick={() => {
                                setOpen(!isOpen)
                                setQRcode(false)
                            }}>Close</button>
                        </div>
                        <form className={style.form} onSubmit={onSubmit(handleSubmit)}>
                            <h2>Make your Reservation right now!</h2>

                            <label>Email</label>
                            <input
                            id='email' 
                            type="email"
                            name='email' 
                            {...register('email')}
                            placeholder='you@example.com'
                            />

                            <span className={style.boxValidationErros}>{errors?.email?.message}</span>

                            <label>Reservation code</label>
                            <input
                            id='codeReserve'
                            type='codeReserve'
                            name='codeReserve' 
                            {...register('codeReserve')}
                            placeholder='********'
                            />
                            
                            <p className={style.paraph}>Choose the code of your choice to secure your reservation</p>

                            <span className={style.boxValidationErros}>{errors?.codeReserve?.message}</span>

                            <label>Date</label>
                            <input
                            id='date'
                            type='date' 
                            name='date' 
                            {...register('date')} 
                            placeholder='01/02/2023' 
                            />

                            <span className={style.boxValidationErros}>{errors?.date?.message}</span>

                            <label>Time</label>
                            <input 
                            id='time'
                            name='time'
                            type='time'
                            {...register('time')} 
                            />

                            <span className={style.boxValidationErros}>{errors?.time?.message}</span>

                            <button onClick={() =>  {
                            if(isValid) {
                                setQRcode(true)
                                setHaveReservation(true)
                                console.log(haveReservation)
                            }
                            }} value={QRcode}>Reserve</button>
                           { /*  */}
                        </form>
                    </>
                ) : (
                    <>
                        <div className={style.QRbox}>
                            <div className={style.checkQRCode}>
                                <img src={checkQRCode} alt="check QR code" />
                                <button onClick={() => {
                                        setOpen(!isOpen)
                                        setQRcode(false)
                                }}>Close</button>
                            </div>
                            <div className={style.reserveBox}>
                                <h1>Scan your reserve!</h1>
                                <QRCode
                                style={{ height: "auto" }}
                                value={'https://www.linkedin.com/in/caio-neves-531a26206/'}
                                viewBox={`0 0 256 256`}
                                />
                            </div>
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