new Swiper('.slider',{
    speed: 2000,
    mousewheel: {
        enabled: true,
        sensivity: 2.4
    },
    spaceBetween: 18,
    parallax: true,
})


$(document).ready(function () {
    $('.header-burger').click(function(e){
        $('.header-burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})