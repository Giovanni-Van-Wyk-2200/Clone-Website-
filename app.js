const loop = document.querySelector('.loop');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //create the DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attach all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    loop.appendChild(slide);

    //image setup
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    //slide effects

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 *
        (sliders.length - 2)}px)`;
    }
}
//clac is css formula to do calculations
//the negative sign indicates negative margin left
//100 because it has to go 100 percent off the screen
//multiply 100 with the calculation to get negative 100 percent per slide
//subtract 2 because second slide in the middle
 
for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 4000);

//trailer cards

const trailerCards = [...document.querySelectorAll('.trailer-card')];

trailerCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let trailer = item.children[1];
        trailer.play();
    })
    item.addEventListener('mouseleave', () => {
        let trailer = item.children[1];
        trailer.pause();
    })
})