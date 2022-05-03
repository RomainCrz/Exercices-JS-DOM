// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
const nav = document.querySelector("nav");
let lastScroll;
let scrollComp = 0;

window.addEventListener("scroll", function () {
    lastScroll = window.scrollY;
    comparaison(lastScroll);
});

function comparaison(scroll) {
    console.log(scroll);

    if (scroll > scrollComp) {
        scrollComp = scroll;
    }
    if (scroll == 0) {
        nav.style.top = 0 + "px";
    }
    if (scroll > 60) {
        nav.style.top = -60 + "px";
    }
    if (scroll < scrollComp) {
        nav.style.top = 0 + "px";
        scrollComp = scroll;
    } else {
        nav.style.top = -60 + "px";
    }
}
