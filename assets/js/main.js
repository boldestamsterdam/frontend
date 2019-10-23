// header sticky na scroll

var distance = $('.scrollnav').offset().top;

$(window).scroll(function () {
    // als window verder is gescrollt dan de afstand tussen top en de .scrollnav 
    if ($(this).scrollTop() >= distance) {
        $('nav.scrollnav').addClass('fixednav');
        $("main").css("margin-top", "53px");
    } else {
        $('nav.scrollnav').removeClass('fixednav');
        $("main").css("margin-top", "0");
    }
});

// bron: https://stackoverflow.com/questions/7543718/test-in-jquery-if-an-element-is-at-the-top-of-screen

// css animaties starten als er op zoeken icoon geklikt wordt.

$("nav .zoeken").click(function () {
    $("form.zoeken").toggleClass("zoekenactive");
    $("#header article").toggleClass("zoekenactive");
    // autofocus op input veld
    $("form input").focus();
});

// zoek knop submit laten verschijnen als er getypt word

$(".zoeken button").hide();
  $(".zoeken input").keydown(function(){
    $(".zoeken button").fadeIn();
  });

// bron: https://www.w3schools.com/jquery/event_keyup.asp

