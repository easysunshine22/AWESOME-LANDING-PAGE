const mobileToggle = document.querySelector('.toggle-menu');
const mobileMenu = document.querySelector('header ul');
const AppContainer = document.querySelector('.AppContainer');
const AppContent = document.querySelector('.content');
const span = document.querySelector('.span');
const image = document.querySelector('.cocaCola');
const sliderThumbOne = document.querySelector('.imgSlider1');
const sliderThumbTwo = document.querySelector('.imgSlider2');
const sliderThumbThree = document.querySelector('.imgSlider3');


mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('showMenu');
})
AppContent.addEventListener('click', () => {
    mobileMenu.classList.remove('showMenu');
})

const closeNav = () =>{
    mobileMenu.classList.remove('showMenu');
}

sliderThumbOne.addEventListener('click', () => {
    image.src = './img/coke.png';
    AppContainer.style.background = '#E21D27';
    span.innerHTML = 'Classic';
    mobileMenu.style.background = '#E21D27';
})
sliderThumbTwo.addEventListener('click', () => {
    image.src = './img/Coca-Cola-Zero-Can.png';
    AppContainer.style.background = '#010101';
    span.innerHTML = 'Zero';
    mobileMenu.style.background = '#010101';
})
sliderThumbThree.addEventListener('click', () => {
    image.src = './img/coke3.png';
    AppContainer.style.background = '#4B1933';
    span.innerHTML = 'Cherry';
    mobileMenu.style.background = '#4B1933';
})

// const imgSider = (change) => {
    
// }