import {  NavLink } from "react-router-dom";
import classess from './MainHeader.module.css';

const MainHeader = () =>{
    return(
    <header className={classess.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classess.active} to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classess.active} to="/Products">Products</NavLink>
                </li>

            </ul>
        </nav>
    </header>)
}

export default MainHeader;