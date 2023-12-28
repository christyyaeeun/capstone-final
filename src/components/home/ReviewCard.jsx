import React from 'react';
import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Review.module.scss';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const ReviewCard = ({ customer }) => {
    return (
        <article className={ styles.reviewCard }>
            <img src={ customer.image } alt={ customer.fullName } />
            <h4>{ customer.fullName }</h4>
            <span>
                { customer.rating.map((ratingPoint, index) =>
                    <FontAwesomeIcon
                        key={ index }
                        icon={ ratingLevels[ ratingPoint ] }
                        size="md"
                    />
                ) }
            </span>
            <h3>{ customer.title }</h3>
            <blockquote><p>"{ customer.says }"</p></blockquote>
     
        </article>
    );
};

export default ReviewCard;
