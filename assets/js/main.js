// css animaties starten als er op zoeken icoon geklikt wordt.
document.querySelector("li.zoeken").onclick = function () {
    zoekbalkUitklappen()
};

function zoekbalkUitklappen() {
    document.querySelector("form.zoeken").classList.add("zoekenactive");
    document.getElementById("zoeken").focus();
}

// zoek knop submit laten verschijnen als er getypt word
document.querySelector("input").onkeydown = function () {
    zoekKnopNaTypen()
};

function zoekKnopNaTypen() {
    document.querySelector("form button").style.opacity = "1";
}
// bron: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown_dom


// fixed header na scroll
function fixedHeaderNaScroll() {
    var ypos = window.pageYOffset;

    // als y 90px is gescrolled en de breedte van de browser groter of gelijk aan 700px maak header sticky
    if (ypos > 90 && window.innerWidth >= 700){
        document.querySelector("nav.scrollnav").classList.add("fixednav");
        document.querySelector("main").style.marginTop = "53px";
    
    // als y 140px is gescrolled en de breedte van de browser kleiner of gelijk aan 700px maak header sticky
    } else if (ypos > 140 && window.innerWidth <= 700){
        document.querySelector("nav.scrollnav").classList.add("fixednav");
        document.querySelector("main").style.marginTop = "53px";

    }else {
        document.querySelector("nav.scrollnav").classList.remove("fixednav");
        document.querySelector("main").style.marginTop = "0";
    }

}

window.addEventListener("scroll", fixedHeaderNaScroll);