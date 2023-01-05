import React from 'react'
import { useState } from 'react';
import { fetchWeather } from '../../utils/api';
import { Current, Hourly } from './fc_components';

const Forecast = () => {
  const [ formInput, setFormInput ] = useState('');
  const [ locationData, setLocationData ] = useState({});
  const [ currentData, setCurrentData ] = useState({});
  const [ hourlyData, setHourlyData ] = useState([]);

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(formInput);

    console.log(data);

    setLocationData(data.location);
    setCurrentData(data.current);
    setHourlyData(data.forecast.forecastday)
    setFormInput('');
  }

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="location"
            value={formInput}
            onChange={handleInputChange}>
          </input>
          <button>GET WEATHER</button>
        </form>
      </div>

      {
        Object.keys(locationData).length ? (
          <div>
            < Current location={locationData} current={currentData} hourly={hourlyData}/>
            < Hourly />
          </div>
        ) : <p>NO LOCATION SELECTED</p>
      }



    </div>
  )
}

export default Forecast;