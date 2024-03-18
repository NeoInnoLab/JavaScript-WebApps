# NeoWeatherCast - [link](https://neoinnolab.github.io/Neo-Mini-WebApp/WeatherCast/index.html)

## Overview
The webApp is user-friendly application designed to deliver real-time weather forecasts for any location around the world. 
Utilizing the OpenWeatherMap API, this webapp provides users with accurate, up-to-date weather information including temperature, humidity, wind speed, and more. 
Built with HTML, CSS, and JavaScript, it offers a clean and intuitive interface for easy navigation and use.

## Features
- **Search by City:** Users can search for weather forecasts by city name globally.
- **Current Weather Data:** Displays current weather conditions including temperature, humidity, wind speed, and weather description.
- **Responsive Design:** Ensures a seamless experience on both desktop and mobile devices.
- **Simple and Clean UI:** Easy to navigate interface for efficient usability.

## Usage
- Simply enter the name of the city for which you want the weather forecast in the search box and press enter.
- The webapp will fetch and display the current weather details including temperature, humidity, wind speed, weather conditions (like clear, clouds, rain), and the city's name.
- If the entered city name is not found, the webapp will display an error message prompting you to try searching again.

## Demo

![Home Page](/path/to/homepage_screenshot.png)
*Home page showing the search functionality.*

![Weather Result](/path/to/weatherresult_screenshot.png)
*Displaying weather details after searching for a city.*



## Code Examples

### Fetch Weather Data
To fetch weather data from the OpenWeatherMap API, you can use the following JavaScript function:

```javascript
async function fetchWeather(cityName) {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}
```


## Contact
For support or inquiries, please email me at [shanda.wun@gmail.com](mailto:shanda.wun@gmail.com) or open an issue on GitHub.

