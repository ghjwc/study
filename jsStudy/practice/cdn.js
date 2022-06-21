const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 100,
    autoplay: {
        delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let shop = document.querySelector('.shop');

  swiper.on('slideChangeTransitionEnd', function(s) {
    // console.log(this);
    
    if (s.activeIndex == 1 || s.activeIndex == 4) {
        console.log('show');
        
        shop.style.transition = '1s';
        shop.style.height = '100px';
        shop.style.background = 'red';
    } else {
        shop.style.height = 0;
        shop.style.background = 'transparent';
    }
  })


// https://swiperjs.com/swiper-api