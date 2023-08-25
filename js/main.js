
//load more bottun
let items = document.querySelector('.items');
let loadbtn = document.querySelector('.load-morebtn');


loadbtn.onclick = ()=> {
    if (items.style.height <= '1800px') {
        items.style.height = '2800px';
        
    } else  {
        items.style.height = '1800px'
    }
}


var swiper = new Swiper(".card-slider", {
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay:{
     delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     breakpoints: {
       320: {
         slidesPerView: 1,
       },
       480: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
  });
 
