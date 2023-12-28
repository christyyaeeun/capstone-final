import { createContext, useContext, useState } from 'react';

const RsvpContext = createContext();

export const RsvpProvider = ({ children }) => {
    const [ rsvpData, setRsvpData ] = useState(null);

    const setRsvp = (data) => {
        setRsvpData(data);
    };

    return (
        <RsvpContext.Provider value={ { rsvpData, setRsvp } }>
            { children }
        </RsvpContext.Provider>
    );
};

export const useRsvp = () => {
    const context = useContext(RsvpContext);
    if (!context) {
        throw new Error('useRsvp must be used within an RsvpProvider');
    }
    return context;
};
