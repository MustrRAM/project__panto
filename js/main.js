    swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev' ,
          },
          clickable: true,
       
          breakpoints:{
            320: {
                slidesPerView:1, 
             },
            500: {
               slidesPerView:2, 
            },
            900: {
                slidesPerView:3, 
             },
             1200: {
                slidesPerView:4, 
             }
          },

      

});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('menu--active');
})



const menuLink = document.querySelector('.menu__link');
const menuLinkBtn = document.querySelector('.menu__link-btn')
const menuSwipe = document.querySelector('.menu__list-swipe');

menuLink.addEventListener('click', () => {
    menuSwipe.classList.toggle('menu__list-swipe--active');
    menuLinkBtn.classList.toggle('menu__link-btn--active')
})


const priceBtn = document.querySelectorAll('.price__bar-list')

for (const price of priceBtn){
    price.addEventListener('click', () => {
        clearActiveClasses()

        price.classList.add('price__bar-list--active')
    })
}

function clearActiveClasses(){
    priceBtn.forEach((price) =>{
        price.classList.remove('price__bar-list--active')
    })
}
