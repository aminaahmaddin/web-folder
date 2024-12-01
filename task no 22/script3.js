const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon img');
const cloudOutput= document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.location');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

// default city when page loads
let cityInput = "london";
const apiKey = 'a0e57b337e66ee37cce86cbcb998b265'; // Replace with your OpenWeatherMap API key

// add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
});

form.addEventListener('submit', (e) => {
    if (search.value.length === 0) {
        alert('Please type in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()];
}

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            temp.innerHTML = data.main.temp + "&#176;C";
            conditionOutput.innerHTML = data.weather[0].description;

            const localtime = new Date();
            const y = localtime.getFullYear();
            const m = localtime.getMonth() + 1;
            const d = localtime.getDate();
            const time = localtime.toLocaleTimeString();

            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)}, ${d}/${m}/${y}`;
            timeOutput.innerHTML = time;

            nameOutput.innerHTML = data.name;
            const iconId = data.weather[0].icon;
            icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

            cloudOutput.innerHTML = `Cloud: ${data.clouds.all}%`;
            humidityOutput.innerHTML = `Humidity: ${data.main.humidity}%`;
            windOutput.innerHTML = `Wind: ${data.wind.speed} m/s`;

            let timeOfDay = "day";
            const code = data.weather[0].id;

            if (localtime.getHours() >= 18 || localtime.getHours() < 6) {
                timeOfDay = "night";
            }

            if (code >= 200 && code < 300) {
                // Thunderstorm
                app.style.backgroundImage = `url('./images/${timeOfDay}/storm.jpg')`;
            } else if (code >= 300 && code < 600) {
                // Rain
                app.style.backgroundImage = `url('./images/${timeOfDay}/rain.jpg')`;
            } else if (code >= 600 && code < 700) {
                // Snow
                app.style.backgroundImage = `url('./images/${timeOfDay}/snow.jpg')`;
            } else if (code >= 700 && code < 800) {
                // Atmosphere
                app.style.backgroundImage = `url('./images/${timeOfDay}/fog.jpg')`;
            } else if (code === 800) {
                // Clear
                app.style.backgroundImage = `url('./images/${timeOfDay}/clear.jpg')`;
            } else if (code > 800) {
                // Cloudy
                app.style.backgroundImage = `url('./images/${timeOfDay}/cloudy.jpg')`;
            }

            app.style.opacity = "1";
        })
        .catch(() => {
            alert('City not found, please try again');
            app.style.opacity = "1";
        });
}

fetchWeatherData();
app.style.opacity = "1";

