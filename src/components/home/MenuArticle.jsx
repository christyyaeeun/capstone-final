import { Link } from 'react-router-dom';
import img1 from '../../assets/images/Asset 22.png';
import img2 from '../../assets/images/Asset 23.png';
import img3 from '../../assets/images/Asset 24.png';
import MenuCard from './MenuCard';
import styles from './MenuArticle.module.scss';

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

const MenuArticle = () => {
    return (
        <section className={ `mainContainer grid ${ styles[ 'specials' ] }` }>
            <div className={ styles.specialsHeader }>
                <h2>This week specials!</h2>
                <Link className="button-primary">
                    Online Menu
                </Link>
            </div>
            { items.map((item, index) =>
                <MenuCard key={ index } item={ item } />
            ) }
        </section>
    );
};

export default MenuArticle;
