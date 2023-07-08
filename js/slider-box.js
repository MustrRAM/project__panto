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
