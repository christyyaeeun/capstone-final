import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './MenuCard.module.scss';
import React, { useState } from 'react';

const {
    card,
    cardImage,
    cardHeader,
    cardFooter,
} = styles;


const MenuCard = ({ item }) => {
    const [ isHovered, setIsHovered ] = useState(false);

    return (

        <article className={ card }>
            {/* <div
                className={ `menuCard ${ isHovered ? 'hovered' : '' }` }
                onMouseEnter={ () => setIsHovered(true) }
                onMouseLeave={ () => setIsHovered(false) }
            > */}
            <div
                className={ `menuCard ${ isHovered ? 'hovered' : '' }` }
                onMouseEnter={ () => setIsHovered(true) }
                onMouseLeave={ () => setIsHovered(false) }
            >

                <div className={ cardImage }>
                    <img src={ item.image } alt={ item.name } />
                </div>
                <div className={ cardHeader }>
                    <h3 className={ isHovered ? 'hoveredText' : '' }>{ item.name }</h3>
                    <span>  <p className={ isHovered ? 'hoveredText' : '' }>{ item.price }</p></span>
                    {/* <h3>{ item.name }</h3>
                    <span>{ item.price }</span> */}
                    {/* <h3 style={ { color: isHovered ? '#f4ce14' : '#495e57' } }>{ item.name }</h3>
                    <span><p style={ { color: isHovered ? '#f4ce14' : '#495e57' } }>{ item.price }</p></span> */}
                </div>
                <div className={ cardFooter }>
                    <p>{ item.description }</p>
                    <Link>
                        Order a delivery <FontAwesomeIcon icon={ faMotorcycle } />
                    </Link>
                </div>
            </div>

        </article>
    );
};

export default MenuCard;
