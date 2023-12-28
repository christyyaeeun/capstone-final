import { useReducer, useEffect, useState } from "react";
import Hero from '../components/layout/Hero';
import img from '../assets/images/dark-rsvp.png'
import RsvpForm from '../components/reservation/RsvpForm';
import { fetchAPI } from "../utils/bookingApi";
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const navigate = useNavigate();
    const [ submittedData, setSubmittedData ] = useState(null);

    // const handleFormSubmit = (formData) => {
    //     // Log the form data to the console for debugging
    //     console.log('Submitted Form Data:', formData);

    //     setSubmittedData(formData);
    //     // Redirect to Confirmation page
    //     navigate('/confirmation', { state: formData });
    // };
    const handleFormSubmit = (formData) => {
        setSubmittedData(formData);
        const encodedName = encodeURIComponent(formData.name);
        const reservationLink = `/reservation/${ encodedName }`;
        navigate(reservationLink, { state: formData });
    };

    const initialState = {
        availableTimes: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return { ...state, availableTimes: action.payload };
            default:
                return state;
        }
    };

    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            const initialData = await fetchAPI(new Date());
            dispatch({ type: 'UPDATE_TIMES', payload: initialData });
        };

        fetchData();
    }, []);

    return (
        <div className='booking'>
            <Hero title="Table Reservation" image={ img } />
            <RsvpForm
                availableTimes={ state.availableTimes }
                updateTimes={ dispatch }
                onFormSubmit={ handleFormSubmit }
            />
        </div>
    )
}

export default BookingPage