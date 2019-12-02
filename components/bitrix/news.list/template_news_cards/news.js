var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

 // var news = '<div class="blog-slider__item swiper-slide">'+
 // '<div class="blog-slider__img">'+
    
 //   '<img src="'++'" alt="">'+
 // '</div>'+
 // '<div class="blog-slider__content">'+
  //  '<span class="blog-slider__code">'+ +'</span>'+
 //   '<div class="blog-slider__title">'+ +'</div>'+
 //   '<div class="blog-slider__text">'+ +'</div>'+
 //   '<a href="#" class="blog-slider__button">'+ +'</a>'+
 // '</div>'+
//'</div>';