import { useForm } from 'react-hook-form'
import style from './Login.module.scss'

const Login = () => {

    const { register, handleSubmit } = useForm()

    const submitForm = (e) => {
        console.log(e)
    }
        return(
            <>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.login}>
                        <form action="" onSubmit={handleSubmit(submitForm)}>
                            <h1>Get Started Now</h1>
                            <p>Enter your credencials to acess your account</p>
    
                            <label htmlFor="">Name</label>
                            <input type="text" {...register('name')} placeholder='Ramom Silva'/>
    
                            <label htmlFor="">Email adress</label>
                            <input type="email" {...register('email')} placeholder='Ramom Silva'/>
    
                            <label htmlFor="">Password</label>
                            <input type="password" {...register('password')} placeholder='Min 8 chars'/>
    
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" {...register('secondPassword')} placeholder='Ramom Silva'/>
    
                            <button>Login</button>
                        </form>
                    </div>
    
                    <div className={style.apresentation}>
                        <h1>The simplest way to manage your workforce</h1>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            </>
        )
}

export default Login