import React, { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import BookingPage from '../pages/BookingPage';
import Menu from '../pages/Menu';
import Reservation from '../pages/Reservation'
import Confirmation from '../pages/Confirmation';

function Router() {
    const initialState = {
        availableTimes: [
            { time: '5:00 PM', booked: false },
            { time: '6:00 PM', booked: false },
            { time: '7:00 PM', booked: false },
            { time: '8:00 PM', booked: false },
            { time: '9:00 PM', booked: false },
            { time: '10:00 PM', booked: false },
        ],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                const updatedTimes = state.availableTimes.map(timeSlot => {
                    if (timeSlot.time === action.payload) {
                        return { ...timeSlot, booked: true };
                    }
                    return timeSlot;
                });
                return { ...state, availableTimes: updatedTimes };
            default:
                return state;
        }
    };

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const updateTimes = (newTimes) => {
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
    };
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/rsvp" element={ <BookingPage /> } />
            <Route path="/reservation/:name" element={ <Reservation /> } />
            <Route path="/confirmation" element={ <Confirmation /> } />
            <Route path="/menu" element={ <Menu /> } />
        </Routes>
    )
}

export default Router;