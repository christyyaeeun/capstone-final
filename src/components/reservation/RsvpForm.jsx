import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/Page.module.scss';
import InputField from './InputField';

export default function RsvpForm(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        tel: '',
        people: 1,
        date: '',
        occasion: '',
        preferences: '',
        comments: '',
        time: '',
    });

    const [ finalTime, setFinalTime ] = useState([]);

    useEffect(() => {
        setFormData((prevData) => ({ ...prevData, time: props.availableTimes[ 0 ]?.time || '' }));
    }, [ props.availableTimes ]);

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [ field ]: value }));
    };

    const handleDateChange = (e) => {
        const stringify = e.target.value;
        const newDate = new Date(stringify);
        props.updateTimes(newDate);
        handleInputChange('date', e.target.value);
    };

    const handleSubmit = () => {
        // Call the onFormSubmit callback with the current formData
        props.onFormSubmit(formData);
    };

    return (
        // <div className={ styles.reservation }>

        // </div>
        <>
            <form className={ styles.rsvpForm }>
                <InputField
                    label="Full Name"
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={ formData.fName }
                    onChange={ (e) => handleInputChange('name', e.target.value) }
                    required
                    minLength={ 2 }
                    maxLength={ 50 }
                />
                <InputField
                    label="Select Date"
                    type="date"
                    id="date"
                    value={ formData.date }
                    onChange={ handleDateChange }
                    required
                />
                <InputField
                    label="Select Time"
                    type="select"
                    id="time"
                    value={ formData.time }
                    onChange={ (e) => handleInputChange('time', e.target.value) }
                    options={ props.availableTimes.map((timeSlot) => timeSlot.time) }
                    required
                />
                <InputField
                    label="Party Size"
                    type="select"
                    id="people"
                    value={ formData.people }
                    onChange={ (e) => handleInputChange('people', e.target.value) }
                    options={ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }
                    required
                />
                <InputField
                    label="Occasion"
                    type="select"
                    id="occasion"
                    value={ formData.occasion }
                    onChange={ (e) => handleInputChange('occasion', e.target.value) }
                    options={ [ 'None', 'Birthday', 'Anniversary', 'Engagement', 'Other' ] }
                    className='input'
                />
                <InputField
                    label="Seating preferences"
                    type="select"
                    id="preferences"
                    value={ formData.preferences }
                    onChange={ (e) => handleInputChange('preferences', e.target.value) }
                    options={ [ 'None', 'Indoors', 'Outdoor (Patio)', 'Outdoor (Sidewalk)' ] }
                    className='input'
                />
                <div>

                    <div className={ styles.centerButton }>
                        {/* <Link className="actionBtn"
                            to={ {
                                pathname: "/confirmation",
                                state: formData,
                            } }
                        > Book Table</Link> */
                            <button
                                className="actionBtn"
                                type="button"
                                onClick={ handleSubmit }
                            >
                                Book Table
                            </button>
                        }
                    </div>
                </div>
            </form>
        </>
    );
}