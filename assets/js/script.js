const preloader = document.querySelector('.pre-loader')
const header = document.getElementById('slider-area')

function preload(){
    setTimeout(()=>{
        preloader.classList.add('preload-finish')
        header.classList.add('page-load')
        document.querySelector('.call-to-action').style.display='block'
    },5000)
}

preload()