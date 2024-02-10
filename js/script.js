const swiper1 = new Swiper(".slider-1", {
  between: 0,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });


  const swiper2 = new Swiper(".slider-2", {
    between: 0,
 autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper3 = new Swiper(".slider-3", {
    between: 0,
 autoHeight: true,
 effect: "coverflow",
 grabCursor: true,
 loop: true,
 centeredSlides: true,
 slidesPerView: "auto",
 coverFlowEffect: {
  rotate: 40,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideshadows: true,
 },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    pagination: {
      el: '.custom-pagination',
    }
  });






const hamburger = document.querySelector('.hamburger');
 const navList = document.querySelector('.nav-list');

 
hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('open')
   });

  





const loader = document.querySelector(".loader");

window.addEventListener("load", ()=> {
  setTimeout( () => {
loader.style.display = 'none';
  },2000);
});



const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 200) {
    navigation.classList.add('fix');
    header.style.zIndex = '1000';
  }else {
    navigation.classList.remove('fix');
  }
});




const links = [... document.querySelectorAll(".nav-link")];

links.map(link=> {
  link.addEventListener('click', (e) => {
e.preventDefault();

const id = e.currentTarget.getAttribute("href").slice(1);
const el = document.getElementById(id);
const navHeight = navigation.getBoundingClientRect().height;
const fix = navigation.classList.contains("fix");
let position = el.offsetTop - navHeight;

window.scrollTo({
left: 0,
top: position,
});

navList.classList.remove('open');
  });
});


const scroll = ScrollReveal({
  distance: '100px',
  duration: 2500,
  reset: true,
});



scroll.reveal(`.about .col h1, .about col p, .about .col .btn`, {
  origin: 'left',
  interval: 150,
});


 scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
 {
   origin: "top",
  }
);

scroll.reveal(`.service img,.contact .title`, {
   origin: "bottom",
 });

 scroll.reveal(`.service .col,.trip .row`, {
   origin: "bottom",
 });

 scroll.reveal(`.trip .title,.more .col:first-child,.newsletter .col`, {
   origin: "top",
 });


 scroll.reveal(`.footer .col h3`, {
   origin: "bottom",
 });

 scroll.reveal(`.footer .col img`, {
   origin: "top",
 });

 scroll.reveal(`.footer .col a`, {
   origin: "bottom",
 });




