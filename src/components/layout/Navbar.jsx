import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import CustomAvatar from './CustomAvatar';
import styles from '../../styles/Navbar.module.scss';
// import '../styles/_variables.scss';

const NavLinks = (props) => {
    const { to, children, theme } = props;

    return (
        <NavLink
            to={ to }
            className={ styles[ 'nav-link' ] }
            activeclassname={ styles.active }
            style={ {
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s',
                color: theme === 'light' ? 'var(--light-font-color)' : 'var(--dark-font-color)',
            } }
        >
            { children }
        </NavLink>
    );
};

const Navbar = ({ onSelect }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav>
                <div className={ styles[ 'desktop-nav' ] }>
                    <div className={ styles[ 'nav-wrapper' ] }>
                        <div id='logo'>Logo</div>
                        <div className={ styles[ 'desktop-stack' ] }>
                            <div className={ styles[ 'navlink' ] } id={ styles[ 'desktop-flex' ] }>
                                <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/">
                                    Home                                </NavLinks>
                                <NavLinks className='text' style={ { marginBottom: '10px', textDecoration: 'none' } } to="/about">
                                    About
                                </NavLinks>
                                <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/rsvp">
                                    Book
                                </NavLinks>
                                <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/menu">
                                    Menu
                                </NavLinks>
                            </div>
                        </div>
                        {/* Avatar menu for desktop */ }
                        <div className={ styles[ 'avatar-stack' ] }>
                            {/* <CustomAvatar size='sm' /> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div className={ styles[ 'nav-mobile' ] }>
                <div className={ styles[ 'mobile-nav' ] }>
                    <div className={ styles[ 'nav-wrapper' ] }>
                        <div id='logo'>Logo</div>
                        <button onClick={ toggleMenu } className={ styles[ 'hamburger-icon' ] }>
                            &#9776;
                        </button>
                    </div>
                </div>
            </div>
            { isOpen && (
                <div className={ styles[ 'navlink' ] } id={ styles[ 'mobile-menu' ] } style={ { padding: '16px 8px' } }>
                    <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/">
                        Home
                    </NavLinks>
                    <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/about">
                        About
                    </NavLinks>
                    <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/rsvp">
                        Book
                    </NavLinks>
                    <NavLinks style={ { marginBottom: '10px', textDecoration: 'none' } } to="/menu">
                        Menu
                    </NavLinks>
                </div>
            ) }
        </>
    );
};

export default Navbar;
