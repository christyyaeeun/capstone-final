import React from 'react'
import styles from '../../styles/Hero.module.scss'

function Hero({ title, image }) {
    return (
        <header className={ styles.headerRsvp }>
            { image && <img src={ image } alt="Hero Image" /> }
            <div className={ styles.headerText }>
                <h1 className='title'>{ title ? title : 'Default title' }</h1>
            </div>
        </header>
    );
}

export default Hero;
