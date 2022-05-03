// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const nav = document.querySelector("nav");
const img = document.querySelector("#imgImprovise");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");

window.addEventListener("scroll", (e) => {
    console.log(document.body.scrollHeight);
    let scroll = window.scrollY;
    console.log(scroll);
    if (scroll > 0) {
        nav.style.height = 45 + "px";
    } else {
        nav.style.height = 90 + "px";
    }

    if (scroll > window.innerHeight / 2) {
        img.style.opacity = 1;
        img.style.transform = "translateX(0px)";
    }
    if (scroll > 1000) {
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0px)";
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    setTimeout(() => {
        popup.remove();
    }, 1000);
});
