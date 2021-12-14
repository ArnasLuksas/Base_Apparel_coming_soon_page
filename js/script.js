const changeImg = document.querySelector('.changeImg');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const span = document.querySelector('.error span');
const form = document.querySelector('form')

const getSize = onresize = () => {
    if (innerWidth >= 1440) {
        changeImg.setAttribute("src", "images/hero-desktop.jpg");
    } else if (innerWidth < 1440) {
        changeImg.setAttribute("src", "images/hero-mobile.jpg");
    }
}
getSize();

const validateForm = addEventListener('submit', (e) => {
    e.preventDefault()
    const inputVal = input.value.trim();
    const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
    const testing = re.test(inputVal);
    if(!testing){
         error.style.display = 'block';
    }else{
        error.style.display = 'none';
    }
});