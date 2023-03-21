import './styles.css';

export const renderWeatherDetails = ():HTMLDivElement =>{


// <div class="weather-details">
//     <div class="humidity">
//         <i class="fa-solid fa-water"></i>
//         <div class="text">
//             <span></span>
//             <p>Humidity</p>
//         </div>
//     </div>

//     <div class="wind">
//         <i class="fa-solid fa-wind"></i>
//         <div class="text">
//             <span></span>
//             <p>Wind Speed</p>
//         </div>
//     </div>

// </div>

const mainDiv:HTMLDivElement = document.createElement<"div">('div');
mainDiv.classList.add('weather-details');

//Humidity
const humidityDiv:HTMLDivElement = document.createElement<"div">('div');
humidityDiv.classList.add('humidity');

const humidityI:HTMLElement = document.createElement<"i">('i');
humidityI.classList.add('fa-solid')
humidityI.classList.add('fa-water')

const textDiv:HTMLDivElement = document.createElement<"div">('div');
textDiv.classList.add('text');

const span:HTMLSpanElement = document.createElement<"span">('span');
const p:HTMLParagraphElement = document.createElement<"p">('p');
p.innerText = 'Humidity';

humidityDiv.appendChild(humidityI);
humidityDiv.appendChild(textDiv);
humidityDiv.appendChild(span);
humidityDiv.appendChild(p);

//Wind
const windDiv:HTMLDivElement = document.createElement<"div">('div');
windDiv.classList.add('wind');

const windI:HTMLElement = document.createElement<"i">('i');
windI.classList.add('fa-solid')
windI.classList.add('fa-wind')

const textDiv1:HTMLDivElement = document.createElement<"div">('div');
textDiv1.classList.add('text');

const span1:HTMLSpanElement = document.createElement<"span">('span');
const p1:HTMLParagraphElement = document.createElement<"p">('p');
p1.innerText = 'Wind Speed';

windDiv.appendChild(windI);
windDiv.appendChild(textDiv1);
windDiv.appendChild(span1);
windDiv.appendChild(p1);

mainDiv.appendChild(humidityDiv);
mainDiv.appendChild(windDiv);


return mainDiv;

}