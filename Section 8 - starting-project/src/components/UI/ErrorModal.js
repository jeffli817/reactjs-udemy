import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

import ReactDOM from "react-dom";

const Backdrop = props =>{
  return  <div className={style.backdrop} onClick={props.onOkay}/>
}

const ModalOverlay =(props) =>{
  return (
    <div>
        <Card className={style.modal}>
          <header className={style.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={style.content}>
            <p>{props.message}</p>
          </div>
          <footer className={style.actions} onClick={props.onOkay}>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onOkay}/>,document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message ={props.message} onOkay={props.onOkay}/>,document.getElementById('modal-root'))}
    </>
  );
};

export default ErrorModal;
