import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Page.module.scss';

const Confirmation = () => {
    const { state } = useLocation();

    const iconStyle = {
        height: '1em',
        fontSize: '3em',
        color: '#495e57',
    };

    return (
        <div className={ styles.confirmation }>
            <FontAwesomeIcon icon={ faCircleCheck } style={ iconStyle } />
            <h1 className='confirmTitle'>Your reservation has been confirmed.</h1>
            <p className='leadText'>We look forward to seeing you soon!</p>
            <div className={ styles.confirmationRes }>
                <p>Name: { state?.name }</p>
                <p>Number of People: { state?.people }</p>
                <p>Date: { state?.date }</p>
                <p>Occasion: { state?.occasion }</p>
                <p>Preferences: { state?.preferences }</p>
                <p>Time: { state?.time }</p>
            </div>
        </div>
    );
};

export default Confirmation;

