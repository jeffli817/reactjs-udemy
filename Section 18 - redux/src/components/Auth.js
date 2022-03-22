import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/auth';
import classes from './Auth.module.css';
import UserProfile from './UserProfile';


const Auth = () => {
  const isLogin =  useSelector(state => state.login.isAuth);
  const dispatch = useDispatch();
  const loginHandler =(event) =>{
    event.preventDefault();
    dispatch(loginAction.login());
  }
  
  
  return (
    <>
    {!isLogin && <main className={classes.auth}>
      <section>
        {!isLogin && <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>}
      </section>
    </main>}
    {isLogin && <UserProfile/>}
    </>
  );
};

export default Auth;
