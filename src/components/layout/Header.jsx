import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logoImage from "../../assets/images/navIcon.png";
import styles from './Header.module.scss';

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/rsvp", label: "Book Reservation" },
];

const Header = () => {
    const { pathname } = useLocation();
    const [ isNavExpanded, setIsNavExpanded ] = useState(false);

    return (
        <header>
            <nav className={ `container grid ${ styles[ 'nav-bar' ] }` }>
                <Link className={ styles[ 'nav-bar-logo' ] } to="/">
                    <img src={ logoImage } alt="Little Lemon logo" />
                </Link>
                <button
                    className={ styles[ 'nav-bar-hamburger' ] }
                    type="button"
                    onClick={ () => setIsNavExpanded(!isNavExpanded) }
                >
                    { isNavExpanded ? (
                        <FontAwesomeIcon icon={ faXmark } size="2x" />
                    ) : (
                        <FontAwesomeIcon icon={ faBars } size="2x" />
                    ) }
                </button>
                <ul
                    className={ `${ styles[ 'nav-bar-links' ] } ${ isNavExpanded ? styles.expanded : ''
                        }` }
                    onClick={ () => setIsNavExpanded(!isNavExpanded) }
                >
                    { navLinks.map((navLink, index) => (
                        <li key={ index }>
                            <Link
                                className={
                                    pathname === navLink.to ? styles[ 'current-location' ] : ''
                                }
                                to={ navLink.to }
                            >
                                { navLink.label }
                            </Link>
                        </li>
                    )) }
                </ul>
            </nav>
        </header>
    );
};

export default Header;