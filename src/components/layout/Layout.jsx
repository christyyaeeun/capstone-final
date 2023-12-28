import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/Page.module.scss';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className={ styles.Layout }>
            <Header />
            {/* <Navbar /> */ }
            { children }
            <Footer />
        </div>
    );
};

export default Layout;
