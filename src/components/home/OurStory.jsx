import React from 'react';
import image1 from '../../assets/images/chefs-mario-and-adrian_a.jpg';
import image2 from '../../assets/images/chefs-mario-and-adrian_b.jpg';
import styles from './OurStory.module.scss';
import Container from '../Container';

const OurStory = () => {
    return (
            <Container
            padding="60px 20px"
            className={ `grid ${ styles[ 'story' ] }` }>

            <div className={ styles.storyContainer }>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Nestled on Maldove Street in Chicago, Little Lemon is a family-owned Mediterranean restaurant that weaves tradition and innovation into every dish. 
                    Our culinary journey unfolds with authentic recipes, showcasing the vibrant flavors of the Mediterranean. 
                    From savory kebabs to the freshest herbs and olive oils, each ingredient is carefully selected to bring a taste of the region to your table. 
                    However, we go beyond tradition, infusing each plate with a modern twist that elevates the dining experience. 
                    Little Lemon is more than a restaurant; it's a warm and inviting space where shared meals become unforgettable moments. 
                    Join us as we blend the old-world charm of Mediterranean cuisine with contemporary creativity, inviting you on a gastronomic adventure that transcends borders.
                </p>
            </div>
            <div className={ styles.storyChefs }>
                <img src={ image1 } alt="Chefs Mario and Adrian" />
                <img src={ image2 } alt="Chefs Mario and Adrian" />
            </div>
        </Container>
    );
};

export default OurStory;
