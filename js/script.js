const changeImg = document.querySelector('.changeImg');

const getSize = onresize = () => {
    if (innerWidth >= 1440) {
        changeImg.setAttribute("src", "images/hero-desktop.jpg");
    } else if (innerWidth < 1440) {
        changeImg.setAttribute("src", "images/hero-mobile.jpg");
    }
}

    getSize();