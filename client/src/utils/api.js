const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function fetchWeather(input) {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${input}&days=3`
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}

