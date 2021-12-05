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

const validateForm = addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputVal = input.value.trim()

    if(inputVal.includes('@')){
        error.style.display = 'none';
        form.innerHTML += `
        <div class="working">
           <span>Working :) your email is: ${inputVal}</span>
        </div>
        <button type="submit" value="Submit" ><img src="images/icon-arrow.svg" alt=""></button>
      `; 

    }else if(inputVal === '' || !inputVal.includes('@') ){

        error.style.display = 'block';

     
        
    }

});





