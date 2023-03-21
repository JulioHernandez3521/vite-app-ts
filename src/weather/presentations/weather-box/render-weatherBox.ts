import './styles.css';


export const renderWeatherBox = ():HTMLDivElement =>{
    // <div class="weather-box">
    //     <img src="">
    //     <p class="temperature"></p>
    //     <p class="description"></p>
    // </div>


    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('weather-box');

    const img:HTMLImageElement = document.createElement('img');

    const p:HTMLParagraphElement = document.createElement('p');
    p.classList.add('temperature')
    const p1:HTMLParagraphElement = document.createElement('p');
    p1.classList.add('description')

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p1);


    return div;
}