import calsses from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props =>{
    return <div className={calsses.backdrop} onClick={props.onClose}/>;
}

const ModalOverlay = props =>{
    return <div className={calsses.modal}>
        <div className={calsses.content}>{props.children}</div>
        </div>
}

const portalElement = document.getElementById('overlays');

const Modal = props =>{
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
};

export default Modal;