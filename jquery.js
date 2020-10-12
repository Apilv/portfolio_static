$(window).on('scroll',function () {    
    
    let scroll = $(window).scrollTop();
    
if (scroll >= 650) {
    $(".navbar").addClass("change");
} else {
    $(".navbar").removeClass("change");
}
});


$(window).on('click', function(){
    
    let scroll = $(window).scrollTop();
    let windowWidth = $(window).width();

    if ((windowWidth < 992) && (scroll >= 650)) {
    
        $(".navbar-collapse").addClass("collapsed-color");
        
    }else {
        
        $(".navbar-collapse").removeClass("collapsed-color");
        
    }
});

$(window).on('resize', function () {
    
    let windowWidth = $(window).width();
    
    if (windowWidth > 992){
        $(".navbar-collapse").removeClass("collapsed-color");  
        }
});


$(window).on('scroll', function () {

    $(".navbar-togler").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");  
        
});


$('body').scrollspy({
    target: '#navbarResponsive',
    offset: 56
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})