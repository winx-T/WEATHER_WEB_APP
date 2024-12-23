const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');
const forecastSlider = document.getElementById('forecast-slider');
const animationSelect = document.getElementById('animation-select');

// Function to fetch current weatherimport { API_KEY } from './api-key.js';

const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4af2245eb05edee3ace7f2f7bae76f91&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => console.error(error));
};
// Function to display current weather
const displayWeather = (data) => {
    const weather = data.weather[0];
    const main = data.main;
    const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}:</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>
        <p>Description: ${weather.description}</p>
        <img class="icon" src="${iconUrl}" alt="${weather.description}">
    `;
    weatherContainer.style.display = 'block';
};

// Function to fetch the 5-day forecast
const fetchForecast = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4af2245eb05edee3ace7f2f7bae76f91&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        });
};

// Function to display forecast slider
const displayForecast = (data) => {
    forecastSlider.innerHTML = ''; // Clear previous forecast
    const dailyData = data.list.filter((item, index) => index % 8 === 0); // Get data for each day
    dailyData.forEach(item => {
        const weather = item.weather[0];
        const main = item.main;
        const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <h3>${new Date(item.dt * 1000).toLocaleDateString()}</h3>
            <img class="icon" src="${iconUrl}" alt="${weather.description}">
            <p>${main.temp}°C</p>
            <p>${weather.description}</p>
        `;
        forecastSlider.appendChild(forecastItem);
    });
};

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Event listener for animation selection
animationSelect.addEventListener('change', (event) => {
    const selectedAnimation = event.target.value;
    switch (selectedAnimation) {
        case 'bounce':
            weatherContainer.style.animation = 'bounce 0.5s';
            break;
        case 'fade':
            weatherContainer.style.animation = 'fadeIn 0.5s';
            break;
        default:
            weatherContainer.style.animation = 'slideIn 0.5s';
            break;
    }
});

// Initialize particles
particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles loaded');
});
