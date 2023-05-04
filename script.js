const menu = document.getElementById('menu')
const nav = document.querySelector('.navigation')
const header = document.querySelector('#header_nav')
let count = 0

menu.addEventListener('click' ,()=>{
    if(!count){
        header.style.flexDirection = 'column'
    }
    header.classList.toggle('headerResponse')
    if(nav.style.display === 'block'){
        nav.style.display = 'none'

    }else{
        nav.style.display = 'block'
    }
})