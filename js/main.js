// Button===============================================
let asideCloseButton = document.querySelector('.aside-close');
let asideOpenButton = document.querySelector('.aside-open')
let asideMenu = document.querySelector('.aside');
let mainPage = document.querySelector('.main');
let asideMobileOpenButton = document.querySelector('.aside-mobile-open');
let asideMobileCloseButton = document.querySelector('.aside-mobile-close');
let linkArray = document.querySelectorAll('.nav__link')

asideCloseButton.addEventListener('click', function () {
  asideMenu.classList.add('aside--close');
  asideOpenButton.classList.add('aside-close--open');
  mainPage.classList.add('main--open');
});

asideOpenButton.addEventListener('click', function () {
  asideMenu.classList.remove('aside--close');
  asideOpenButton.classList.remove('aside-close--open');
  mainPage.classList.remove('main--open');
});

asideMobileOpenButton.addEventListener('click', function () {
  this.classList.add('aside-mobile-open-none');
  asideMenu.classList.add('aside-mobile-open-menu');
});

asideMobileCloseButton.addEventListener('click', function () {
  asideMenu.classList.remove('aside-mobile-open-menu');
  asideMobileOpenButton.classList.remove('aside-mobile-open-none');
});
// Button===============================================
// Cursor Hover=========================================
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
// Cursor Hover=========================================

// typing animation=====================================
// Menu close on click links============================
linkArray.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', () => {
    if (!(asideMenu.classList.contains('.aside-mobile-open-menu'))) {
      asideMenu.classList.remove('aside-mobile-open-menu');
      asideMobileOpenButton.classList.remove('aside-mobile-open-none');
    }
  })
})
// Menu close on click links============================
var typed = new Typed('.animate', {
  strings: [
    "Frontend Developer",
    "Layout Developer"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  cursorChar: '<span class="line"></span>',
});

var typed = new Typed('.about-animate', {
  strings: [
    "Frontend Developer",
    "Layout Developer"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  cursorChar: '<span class="line"></span>',
});
// typing animation=====================================

// Scroll effect=========================================
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  });
}
// Scroll effect=========================================
// Portfolio=============================================
$('.portfolio__item').on('click', function () {
  const value = $(this).attr('data-filter');
  if (value == 'all') {
    $('.products__item').show('1000');
  } else {
    $('.products__item').not('.' + value).hide('1000');
    $('.products__item').filter('.' + value).show('1000');

  }
});

$('.portfolio__item').on('click', function () {
  $(this).addClass('portfolio__item--active').siblings().removeClass('portfolio__item--active');
})
// Portfolio=============================================
// Clients slider========================================
$('.clients__slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 630,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// Clients slider========================================
// Scroll button to top==================================
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('.btn-to-top').addClass('btn-to-top--active');
  } else {
    $('.btn-to-top').removeClass('btn-to-top--active');
  }
});
// Scroll button to top==================================