import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modalFlag, setModalFlag] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setModalFlag({
            title:'Invalid input',
            message:'Please enter a valid name and age (non-empty values).'
        });
        return;
    }
    if (+enteredAge < 1) {
        setModalFlag({
            title:'Invalid age',
            message:'Please enter a valid age(>0).'
        });
        return;
    }
    console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };


  const errorHandler = () =>{
    setModalFlag(null);
  }

  return (
      <div>
      {modalFlag && <ErrorModal title={modalFlag.title} message={modalFlag.message} onOkay={errorHandler}/>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
