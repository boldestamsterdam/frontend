var distance = $('.scrollnav').offset().top;

$(window).scroll(function () {
    if ($(this).scrollTop() >= distance) {
        $('nav.scrollnav').addClass('fixednav');
        $("main").css("margin-top", "53px");
    } else {
        $('nav.scrollnav').removeClass('fixednav');
        $("main").css("margin-top", "0");
    }
});


// https://stackoverflow.com/questions/7543718/test-in-jquery-if-an-element-is-at-the-top-of-screen


$("nav .zoeken").click(function(){
 $("form.zoeken").toggleClass("zoekenactive");
     $("#header article").toggleClass("zoekenactive");
     $("form input").focus();


});