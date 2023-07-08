const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const topBlackout = document.querySelector('.top');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('menu--active');
    menuBtn.classList.toggle('active')
    topBlackout.classList.toggle('active');
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


  