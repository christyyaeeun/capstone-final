import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styles from '../styles/Page.module.scss';

const Reservation = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const { people, date, occasion, preferences, time } = state || {};

  return (
    <>
      <div className={ styles.confirmation }>
        <div className={ styles.confirmationRes }>
          <p>Name: { name }</p>
          <p>Party Size: { people }</p>
          <p>Date: { date }</p>
          <p>Occasion: { occasion }</p>
          <p>Preferences: { preferences }</p>
          <p>Time: { time }</p>
        </div>
      </div>
    </>
  );
};

export default Reservation;
