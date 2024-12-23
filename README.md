
# Weather App

[<img src="https://github.com/winx-T/WEATHER_WEB_APP/blob/main/images/Weather.webp" width="200">](https://winx-t.github.io/WEATHER_WEB_APP/)

This is a dynamic weather web application that provides real-time weather updates and forecasts. The app uses an interactive and visually appealing design with animated particles in the background, real-time weather data, and a smooth user experience. The app is responsive and works seamlessly across devices.

## Live Demo

You can view a live version of this app here: [Weather App Live Demo](https://winx-t.github.io/WEATHER_WEB_APP/)

## Project Structure

```plaintext
project/
├── index.html                  # Main weather app page
├── contact-us.html               # Contact us page
├── styles.css                    # Main stylesheet for styling the app
├── particles-config1.js          # Particles.js configuration 1 for background animation
├── particles-config.js           # Particles.js configuration 2 for background animation
├── app.js                        # JavaScript logic for fetching weather data and app functionality
```

## Features

- **Real-Time Weather Data**: Fetches weather information based on the user's location or entered city.
- **5-Day Weather Forecast**: Displays a 5-day weather forecast with detailed information.
- **Interactive Background**: Uses [Particles.js](https://vincentgarreau.com/particles.js/) to create animated particle effects based on weather conditions (e.g., snowflakes for snow, raindrops for rain).
- **Responsive Design**: The app is fully responsive and adapts to both mobile and desktop devices.
- **Custom Weather Icons**: Custom icons and animations are used to visually represent different weather conditions.

## Technologies Used

- **HTML5**: For the structure of the weather app.
- **CSS3**: For styling the app and creating a clean, modern design.
- **JavaScript**: For dynamic functionality, such as fetching weather data and handling user interactions.
- **Particles.js**: For creating interactive particle backgrounds.
- **Weather API Integration**: Fetches weather data from an external weather service (e.g., OpenWeatherMap).

## Setup Instructions

### Prerequisites

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine (optional, for development purposes).
2. You may need a text editor such as [Visual Studio Code](https://code.visualstudio.com/) to edit the project files.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ali-2003-04/weather-app.git
    ```
2. Navigate to the project folder:
    ```bash
    cd weather-app
    ```
3. Install dependencies (if applicable):
    - If you're using a package manager like npm, run:
        ```bash
        npm install
        ```
4. Open `weather.html` in your browser to view the app.

### API Key Configuration

1. To use the weather data, you need to add your API key to `api-key.js`. Replace the placeholder with your API key from [OpenWeatherMap](https://openweathermap.org/api).
    ```javascript
    const apiKey = 'your-api-key';
    ```

## Deployment

You can deploy this app to any static hosting platform, such as:

- **GitHub Pages**: Push your code to the `main` branch, then enable GitHub Pages in your repository settings.
- **Netlify/Vercel**: Simply connect the repository to platforms like Netlify or Vercel for automatic deployment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
