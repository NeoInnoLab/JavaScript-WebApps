# WeatherCast WebApp - [link](https://neoinnolab.github.io/JavaScript-WebApps/WeatherCast/index.html)

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
- If the entered city name is not found, the webapp will display an error message.

## Demo

<p align="center">
  <img src="https://github.com/NeoInnoLab/Neo-Mini-WebApp/blob/main/WeatherCast/Search.png" alt="Home Page" width="400" style="margin-right: 20px;"/>
  <img src="https://github.com/NeoInnoLab/Neo-Mini-WebApp/blob/main/WeatherCast/Seraching.png" alt="Home Page" width="400"  />
  <br>
  <em>Left: Search Page. Right: Enter the name of the city.</em>
</p>

<p align="center" style="margin-top: 40px;">
  <img src="https://github.com/NeoInnoLab/Neo-Mini-WebApp/blob/main/WeatherCast/SearchResult.png" alt="Home Page" width="400" style="margin-right: 20px;"/>
  <img src="https://github.com/NeoInnoLab/Neo-Mini-WebApp/blob/main/WeatherCast/NotFound.png" alt="Home Page" width="400"/>
  <br>
  <em>Left: Display the weather details. Right: Not found the city.</em>
</p>



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

