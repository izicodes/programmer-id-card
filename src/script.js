const state = document.querySelector('.main-wrapper').dataset.state;
const startPageBtn = document.querySelector('.start-page button');
const imagePageBtn = document.querySelector('.image-select button');
const body = document.querySelector('body');


startPageBtn.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../assets/bg-pattern3.png)';
    startPageBtn.parentNode.style.display = 'none';
});


