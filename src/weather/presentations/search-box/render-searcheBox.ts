import './searcheBox-styles.css';
export const renderSearchBox = (): HTMLDivElement =>{

    // const template = `
    // <div class="search-box">
    //     <i class="fa-solid fa-location-dot"></i>
    //     <input type="text" placeholder="Enter your location">
    //     <button class="fa-solid fa-magnifying-glass"></button>
    // </div>
    // `;

    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('search-box');

    const i:HTMLElement = document.createElement('i');
    i.classList.add('fa-solid');
    i.classList.add('fa-location-dot');

    const input:HTMLInputElement = document.createElement('input');
    input.placeholder = 'Eneter your location';

    const button:HTMLElement = document.createElement('button');
    button.classList.add('fa-solid')
    button.classList.add('fa-magnifying-glass')

    div.appendChild(i);
    div.appendChild(input);
    div.appendChild(button);

    return div;
}