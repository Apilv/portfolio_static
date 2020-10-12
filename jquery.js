// Adds bg color to menu after it pass hero section

$(window).on('scroll', function () {    
    
    let scroll = $(window).scrollTop();
    
if (scroll >= 650) {
    $(".navbar").addClass("change");
} else {
    $(".navbar").removeClass("change");
}
});

// Adds bg color to burger menu

$(window).on('click', function(){
    
    let scroll = $(window).scrollTop();
    let windowWidth = $(window).width();

    if ((windowWidth < 992) && (scroll >= 650)) {
    
        $(".navbar-collapse").addClass("collapsed-color");
        
    }else {
        
        $(".navbar-collapse").removeClass("collapsed-color");
        
    }
});

//Removes burger bg color when burger is inactive

$(window).on('resize', function () {
    
    let windowWidth = $(window).width();
    
    if (windowWidth > 992){
        $(".navbar-collapse").removeClass("collapsed-color");  
        }
});

// Colapse Nav menu on scroll

$(window).on('scroll', function () {

    $(".navbar-togler").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");  
});

// Highlights menu items on scroll

$('body').scrollspy({
    target: '#navbarResponsive',
    offset: 150,
});

// Smooth scroll

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

//Adds animated divider in my-skills section

$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#about-me').position().top ){
            $(".vertical-line").addClass("divider");
    } else {
        $(".vertical-line").removeClass("divider");
    }
});
