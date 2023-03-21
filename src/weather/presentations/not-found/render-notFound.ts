import './notFound-styles.css';

export const renderNotFound = ():HTMLDivElement =>{

    // const template = `
    // <div class="not-found">
    //     <img src="images/404.png">
    //     <p>Oops! Invalid location :/</p>
    // </div>
    // `

    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('not-found');

    const img:HTMLImageElement = document.createElement('img');
    img.src = `${import.meta.env.VITE_PUBLIC_DATAIMG}404.jpg`;
    // img.src = `./assets/images/404.png`;

    const p:HTMLElement = document.createElement('p');
    p.innerText = "Oops! Invalid location"

    div.appendChild(img);
    div.appendChild(p);


    return div;
}