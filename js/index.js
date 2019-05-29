
    var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
        }) 
        
$(".attention h1").on('click', function () {
    $(this).toggleClass("attention_");
    $(this).siblings('h1').removeClass("attention_");
      })  