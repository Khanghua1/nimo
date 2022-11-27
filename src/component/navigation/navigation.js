import {  Link } from "react-router-dom";
import style from './navigation.module.scss';
import { useLocation } from "react-router-dom";
import './active.css'

function Navigation() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log(splitLocation)
    return (
            <ul className={style.nimo__nav_left_list}>
                <li className={`${style.nimo__nav_left_item} ${splitLocation[1] === "nimo" ? "active" : ""}`}>
                    <Link to="/nimo">Home</Link>
                </li>
                <li className={`${style.nimo__nav_left_item} ${splitLocation[1] === "live" ? "active" : ""}`}>
                    <Link to="/live">Live</Link>
                </li>
                <li className={`${style.nimo__nav_left_item} ${style.nav__category} ${splitLocation[1] === "category" ? "active" : ""}`}>
                    <Link to="/category">Category</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                    </svg>
                </li>
                <li className={`${style.nimo__nav_left_item} ${splitLocation[1] === "esports" ? "active" : ""}`}>
                    <Link to="/esports">Esports</Link>
                </li>
            </ul>

    )
}

export default Navigation;