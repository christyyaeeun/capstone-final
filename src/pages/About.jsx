import React, { useState, useEffect } from 'react';


const About = () => {
  const [ usdToMyrRate, setUsdToMyrRate ] = useState(null);
  const [ myrToUsdRate, setMyrToUsdRate ] = useState(null);
  const [ usdAmount, setUsdAmount ] = useState(1);
  const [ myrAmount, setMyrAmount ] = useState(null);

  const API_KEY = '7e483a5711msh9619289ea1c9521p1a3b5fjsnd16f8fd63b47';

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        // Fetch USD to MYR exchange rate
        const usdToMyrResponse = await fetch(
          `https://open.er-api.com/v6/latest/USD?apikey=${ API_KEY }`
        );
        const usdToMyrData = await usdToMyrResponse.json();
        setUsdToMyrRate(usdToMyrData.rates.MYR);

        // Fetch MYR to USD exchange rate
        const myrToUsdResponse = await fetch(
          `https://open.er-api.com/v6/latest/MYR?apikey=${ API_KEY }`
        );
        const myrToUsdData = await myrToUsdResponse.json();
        setMyrToUsdRate(myrToUsdData.rates.USD);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  const handleUsdInputChange = (e) => {
    const amount = e.target.value;
    setUsdAmount(amount);
    // Convert USD to MYR
    setMyrAmount((amount * usdToMyrRate).toFixed(2));
  };

  const handleMyrInputChange = (e) => {
    const amount = e.target.value;
    setMyrAmount(amount);
    // Convert MYR to USD
    setUsdAmount((amount / myrToUsdRate).toFixed(2));
  };

  return (
    <div>
      <h2>USD to MYR Converter</h2>
      <label>
        USD:
        <input type="number" value={ usdAmount } onChange={ handleUsdInputChange } />
      </label>
      <br />
      <label>
        MYR:
        <input type="number" value={ myrAmount || '' } onChange={ handleMyrInputChange } />
      </label>
    </div>
  )
}

export default About