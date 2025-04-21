import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b06cbd59e2a7743e480c1e14d01a6c40&units=metric`
      );
      setWeather(response);
    } catch (err) {
      console.log('Error fetching weather data', err);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className='weather-container'>
      <input
        type='text'
        placeholder='Enter City Name'
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleClick}>Get Weather</button>

      {weather && (
        <div className='weather-info'>
          <h3>{weather.data.name}</h3>
          <p>Temp is {weather.data.main.temp} °C</p>
          <p>{weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

