import React from 'react'
import { useState } from 'react';
import { fetchCurrentWeather } from '../../utils/api';

import { Current, Hourly } from './fc_components';

const Forecast = () => {
  const [formInput, setFormInput] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchCurrentWeather(formInput);
    console.log(data)
    setFormInput('');
  }

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="location" value={formInput} onChange={handleInputChange}></input>
        <button>GET WEATHER</button>
      </form>

      < Current />
      < Hourly />

    </div>
  )
}

export default Forecast;