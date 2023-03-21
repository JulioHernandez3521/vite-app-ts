import { renderSearchBox } from './presentations/search-box/render-searcheBox';
import { renderNotFound } from './presentations/not-found/render-notFound';
import { renderWeatherBox } from './presentations/weather-box/render-weatherBox';
import { renderWeatherDetails } from './presentations/weather-details/render-weatherDetails';

let container:HTMLDivElement,
    search:HTMLButtonElement, 
    weatherBox:HTMLDivElement, 
    weatherDetails:HTMLDivElement, 
    error404:HTMLDivElement;


export const App = () =>{

    const mainDiv: HTMLDivElement = document.createElement('div');
    mainDiv.classList.add('container');


    mainDiv.appendChild(renderSearchBox());
    mainDiv.appendChild(renderNotFound());
    mainDiv.appendChild(renderWeatherBox());
    mainDiv.appendChild(renderWeatherDetails());

    document.querySelector<HTMLDivElement>('#app')!.appendChild(mainDiv);

    init();


}



const init = ()=>{    
    //Se utilizan variables para validar que el elemento no sea nulo 
    const _container:HTMLDivElement | null = document.querySelector('.container');
    if (_container)  container = _container ;
    const _search:HTMLButtonElement | null = document.querySelector('.search-box button');
    if (_search)  search = _search ;
    const _weatherBox:HTMLDivElement | null = document.querySelector('.weather-box');
    if (_weatherBox)  weatherBox = _weatherBox ;
    const _weatherDetails:HTMLDivElement | null = document.querySelector('.weather-details');
    if (_weatherDetails)  weatherDetails = _weatherDetails ;
    const _error404:HTMLDivElement | null = document.querySelector('.not-found');
    if (_error404)  error404 = _error404 ;

    search?.addEventListener('click',async () => {
    
        const APIKey:string = import.meta.env.VITE_API_KEY;
        const city:string = document.querySelector<HTMLInputElement>('.search-box input')?.value || '';
    
        if (city === '')
            return;

        await getData(city, APIKey);
        
    });

    document.querySelector<HTMLInputElement>('.search-box input')?.addEventListener('keyup',async (e) => {

        if(e.keyCode !== 13 ) return;
        
        const APIKey:string = import.meta.env.VITE_API_KEY;
        const city:string = document.querySelector<HTMLInputElement>('.search-box input')?.value || '';
    
        if (city === '')
            return;

        await getData(city, APIKey);
        
    });
    


}

const getData =(city:string, APIKey:string )=>{

    let image:HTMLImageElement, 
    temperature:HTMLParagraphElement,
    description:HTMLParagraphElement,
    humidity:HTMLSpanElement, 
    wind:HTMLSpanElement;

fetch(`${import.meta.env.VITE_URL_BASE}weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {

        if (data.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const _image:HTMLImageElement | null = document.querySelector('.weather-box img');
        if(_image)  image = _image;
        const _temperature:HTMLParagraphElement | null = document.querySelector('.weather-box .temperature');
        if(_temperature)  temperature = _temperature;
        const _description:HTMLParagraphElement | null = document.querySelector('.weather-box .description');
        if(_description)  description = _description;
        const _humidity:HTMLSpanElement | null = document.querySelector('.weather-details .humidity span');
        if(_humidity)  humidity = _humidity;
        const _wind:HTMLSpanElement | null = document.querySelector('.weather-details .wind span');
        if(_wind)  wind = _wind;

        const imgURL = import.meta.env.VITE_PUBLIC_DATAIMG;
        console.log(data)
        switch (data.weather[0].main) {
            case 'Clear':
                image.src = `${imgURL}clear.png`;
                break;

            case 'Rain':
                image.src = `${imgURL}rain.png`;
                break;

            case 'Snow':
                image.src = `${imgURL}snow.png`;
                break;

            case 'Clouds':
                image.src = `${imgURL}cloud.png`;
                break;

            case 'Haze':
                image.src = `${imgURL}mist.png`;
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';



    });
}
