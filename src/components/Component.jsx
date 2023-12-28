import React from 'react';
import Grid from './Grid';
import { Link } from 'react-router-dom';
import MenuCard from './home/MenuCard';
import img1 from '../assets/images/Asset 22.png';
import img2 from '../assets/images/Asset 23.png';
import img3 from '../assets/images/Asset 24.png';
import styles from '../components/home/MenuArticle.module.scss';

const items = [
    {
        name: 'Greek Salad',
        image: img1,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
        name: 'Bruschetta',
        image: img2,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: img3,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const Component = () => {
    return (
        <>
            <section className={ `${ styles[ 'specials' ] } ${ styles[ 'specialsContainer' ] }` }>
                <div className={ styles.specialsHeader }>
                    <h2>This week specials!</h2>
                    <Link className={ `primaryBtn ${ styles[ 'menuBtn' ] }` }>Online Menu</Link>
                </div>
                { items.map((item, index) => (
                    <MenuCard key={ index } item={ item } />
                )) }
            </section>
        </>
    );
};

export default Component;