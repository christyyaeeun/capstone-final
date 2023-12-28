import React from 'react';
import ReviewCard from './ReviewCard';
import image1 from '../../assets/images/customer1.png';
import image2 from '../../assets/images/customer2.png';
import image3 from '../../assets/images/customer3.png';
import image4 from '../../assets/images/customer4.png';
import styles from './Review.module.scss';

const customers = [
    {
        fullName: 'Olivia Mitchell',
        image: image1,
        rating: [ 1, 1, 1, 1, 0.5 ],
        title:'Mediterranean Magic',
        says: `Little Lemon on Maldove Street is Chicago's go-to for a taste of the Mediterranean.
        A must-visit for an authentic and delightful dining adventure.`,
    },
    {
        fullName: 'Ethan Cooper',
        image: image2,
        rating: [ 1, 1, 1, 1, 1 ],
        title: 'Family Feast of Flavors',
        says: `Little Lemon's modern take on traditional Mediterranean dishes is a culinary delight. 
        A family-owned gem on Maldove Street that promises an authentic and memorable dining experience.`,
    },
    {
        fullName: 'Isabella Turner',
        image: image3,
        rating: [ 1, 1, 1, 1, 0.5 ],
        title: 'Flavors of Tradition',
        says: `Little Lemon in Chicago brings a taste of the Mediterranean with a modern twist. 
        The family's touch is evident in every dish, making it the perfect spot for a flavorful and inviting meal.`,
    },
    {
        fullName: 'Benjamin Anderson',
        image: image4,
        rating: [ 1, 1, 1, 1 ],
        title: 'Mediterranean Gem',
        says: `Little Lemon's dishes are a true celebration of Mediterranean flavors. 
        The perfect blend of tradition and innovation creates a memorable dining experience.`,
    },
];

const Reviews = () => {
    return (
        <section className={ styles.reviews }>
            <div className={ `mainContainer grid ${ styles[ 'container' ] }` }>
                <h2>What people say about us!</h2>
                { customers.map((customer, index) =>
                    <ReviewCard key={ index } customer={ customer } />
                ) }
            </div>
        </section>
    );
};

export default Reviews;
