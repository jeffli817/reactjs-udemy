import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const isLogin = useSelector(state => state.login.isAuth);
  const dispatch = useDispatch();
  const loginHandler= () =>{
    dispatch(loginAction.login());
  }

  const logoutHandler= () =>{
    dispatch(loginAction.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
