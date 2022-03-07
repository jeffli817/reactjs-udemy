import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onOkay}>
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
    </div>
  );
};

export default ErrorModal;
