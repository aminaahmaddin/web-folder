const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const weatherDetails= document.querySelector('.weather_details');
const error404= document.querySelector('.not_found');

search.addEventListener('click',()=>{

    const APIKey = 'a0e57b337e66ee37cce86cbcb998b265';
    const City = document.querySelector('.search_box input').value;

    if (City == '' )
        return;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${APIKey}').then(
        response => response.json()).then(json => {

            if (json == '404'){
                container.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove ('active');
                error404.classList.add('active');
                return;

            }
            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add ('active');
            error404.classList.remove('active');

            const image = document.querySelector('.weather_box img');
            const temperature = document.querySelector('.weather_box .temperature');
            const description = document.querySelector('.weather_box .description');
            const humidity = document.querySelector('.weather_details .humidity span');
            const wind = document.querySelector('.weather_details .wind span');

            switch (json.weather[0].main){
                
                case 'Sun':
                  img.src = 'task no 22/icons8-sun-48.png';
                break;
                case 'Rain':
                  img.src = 'task no 22/icons8-rain-48.png';
                break;
                case 'Snow':
                  img.src = 'task no 22/icons8-snow-48.png';
                break;
                case 'Cloud':
                  img.src = 'task no 22/icons8-cloud-48.png';
                break;
                case 'windyCloud':
                  img.src = 'task no 22/icons8-windy-cloud-48.png';
                break;
                case 'Haze':
                  img.src = 'task no 22/icons8-windy-cloud-48.png';
                break;

                default:
                    img.src = 'task no 22/partly-cloudy (3).png';
            }

        //    temperature.innerHTML = '${parseInt(josn.main.temp)}<span>C</span>';
        //    description.innerHTML = '${json.weather[0].description}';
        //    humidity = '${json.main.humidity}%';
        //    wind.innerHTML = '${parseInt(json.wind.speed)}km/h';

        });


        





});





// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}