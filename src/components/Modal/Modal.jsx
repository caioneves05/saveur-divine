import style from './Modal.module.scss'

const Modal = ({ isOpen, actionName, setOpen }) => {

    if(isOpen) {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    <h2>Make your {actionName} right now!</h2>
                    <p>Description</p>
                    <button onClick={() => setOpen(!isOpen)}>Close</button>
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