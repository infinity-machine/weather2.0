import { useState } from 'react';
import { fetchWeather } from './utils/api'

function App() {
  const [formInput, setFormInput] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(formInput);
    console.log(data)
    setFormInput('');
  }

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="location" value={formInput} onChange={handleInputChange}></input>
          <button>GET WEATHER</button>
        </form>
      </div>
  
    </div>
  );
}

export default App;
