const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('menu--active');
        menuBtn.classList.toggle('active')
});

const menuLink = document.querySelector('.menu__link');
const menuLinkBtn = document.querySelector('.menu__link-btn')
const menuSwipe = document.querySelector('.menu__list-swipe');

menuLink.addEventListener('click', () => {
    menuSwipe.classList.toggle('menu__list-swipe--active');
    menuLinkBtn.classList.toggle('menu__link-btn--active')
});

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

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('#animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


  swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    freeMode: true,
    

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev' ,
      },
      clickable: true,
      breakpoints:{
        320: {
            slidesPerView:1, 
            speed:150,
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



$('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed:200,
            }
        },

        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade:true,
                 speed:200,
                
            }
        },
 
    ]

  });
