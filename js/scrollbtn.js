let button = document.getElementById('scrollButton');
let direction = true; // abajo = true arriba = false

button.addEventListener('click', (e) => {
    window.scrollTo({
        top: direction ? -window.innerHeight : window.innerHeight,
        left: 0,
        behaviour: 'smooth'
    });

    let imgStyle = button.getElementsByTagName('img')[0].style;

    if(direction){
        imgStyle.bottom = '.9rem'
        imgStyle.filter = ''
        imgStyle.transform = ''
    }
    else{
        imgStyle.bottom = '-5.6rem'
        imgStyle.filter = 'invert(100%) sepia(37%) saturate(2%) hue-rotate(360deg) brightness(105%) contrast(101%)'
        imgStyle.transform = 'rotate(180deg)'
    }

    direction = !direction; // q pro
});