const hamburger = document.querySelector('.hamburger')
const menuContainer = document.querySelector('.menu-container')
       
hamburger.addEventListener('click', () => {
    if(hamburger.className.includes('bars')){
    hamburger.classList.remove('bars')
    hamburger.classList.add('active')

    menuContainer.classList.remove('hide')
    menuContainer.classList.add('show')
     
    }else{
        hamburger.classList.add('bars')
        hamburger.classList.remove('active')

        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')
    }
})


window.addEventListener('resize', () => {
    if(window.innerWidth > 400){
       if(menuContainer.className.includes('show'))
       menuContainer.classList.remove('show')
       menuContainer.classList.add('hide')
       hamburger.classList.remove('active')
       hamburger.classList.add('bars')
    }
})