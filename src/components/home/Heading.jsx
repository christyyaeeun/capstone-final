import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Heading.module.scss';
import image from '../../assets/images/header-img.jpg';
import Container from '../Container';
const {
    cta,
    headingText,
    leadText,
    description,
    heroImage,
    actionBtn,
} = styles;

export default function Heading() {
    return (
        <Container padding="60px 40px" maxWidth='100%' color='white' backgroundColor="#495e57">
            <article className={ styles.cta }>
                <section className={ styles.headingText }>
                    <h1 className='displayTitle'>Little Lemon</h1>
                    <h2 className='displayTitle'>Chicago</h2>
                    <p className={ `${ leadText } ${ description }` }>We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                        on traditional recipes served with a modern twist.</p>
                    <Link className={ styles.actionBtn } to="/rsvp">
                        Reserve a table</Link>
                </section>

                <section className={ styles.heroImage }>
                    <img src={ image } alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </Container>
    );
}