import React from 'react';
import image from '../../assets/images/header-img.jpg';
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';
import img from '../../assets/images/heroImg.png';

const {
    hero,
    heroInformation,
    heroImage,
    container,
    heroBtn,
} = styles;

const Hero = () => {
    return (
        <section className={ hero }>
            <div className={ `mainContainer grid ${ styles[ 'container' ] }` }>
                <div className={ heroInformation }>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <Link className={ `primaryBtn ${ styles[ 'heroBtn' ] }` } to="/rsvp">
                        Reserve a table
                    </Link>
                </div>
                <img
                    className={ heroImage }
                    src={ img }
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
};

export default Hero;
