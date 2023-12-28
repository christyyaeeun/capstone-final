/**
 * Generates a seeded random number generator.
 * @param {number} seed - The seed for randomness.
 * @returns {Function} - A function to generate seeded random numbers.
 */
const generateSeededRandom = (seed) => {
    const modulus = 2 ** 35 - 31;
    const multiplier = 185852;
    let state = seed % modulus;

    return () => (state = (state * multiplier) % modulus) / modulus;
};

/**
 * Fetches available reservation times for the provided date.
 * @param {Date} date - The date for which reservation times are requested.
 * @returns {Array} - An array of objects representing available reservation times.
 *                   Each object has a 'time' property (string) and a 'booked' property (boolean).
 */
const fetchAvailableReservationTimes = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date provided.');
    }

    const availableTimes = [];
    const seed = date.getDate();
    const getRandom = generateSeededRandom(seed);

    for (let hour = 5; hour <= 10; hour++) {
        const time = `${ hour }:00 PM`;
        const isBooked = getRandom() < 0.5; // Adjust the condition based on your logic

        availableTimes.push({ time, booked: isBooked });

        if (getRandom() < 0.5) {
            const halfHourTime = `${ hour }:30 PM`;
            const isHalfHourBooked = getRandom() < 0.5; // Adjust the condition based on your logic
            availableTimes.push({ time: halfHourTime, booked: isHalfHourBooked });
        }
    }

    return availableTimes;
};


/**
 * Submits booking form data.
 * @param {Object} formData - The booking form data to be submitted.
 * @returns {Promise<boolean>} - A promise that resolves to true if the data was successfully submitted, false otherwise.
 */
const submitBookingData = (formData) => {
    return new Promise((resolve, reject) => {
        // Simulate asynchronous processing and validation
        setTimeout(() => {
            if (formData && formData.name && formData.date && formData.details) {
                // Simulate a successful submission
                console.log('Form data submitted:', formData);
                resolve(true);
            } else {
                // Simulate a failed submission due to incomplete data
                console.error('Form submission failed. Incomplete data:', formData);
                reject(false);
            }
        }, 1000); // Simulate a 1-second delay for asynchronous processing
    });
};

export {
    fetchAvailableReservationTimes as fetchAPI,
    submitBookingData as submitAPI,
};


