// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const btn = document.querySelector("#btn");
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");
let isClicked = false;

btn.addEventListener("click", function () {
    if (isClicked == false) {
        sideBar.style.left = "0px";
        btn.classList.add("btn_transform");
        btn.classList.remove("toggle-btn");
        content.style.filter = "opacity(0.3)";
        isClicked = true;
    } else {
        sideBar.style.left = "-230px";
        btn.classList.add("toggle-btn");
        btn.classList.remove("btn_transform");
        content.style.filter = "opacity(1)";
        isClicked = false;
    }
});

content.addEventListener("click", function () {
    if (isClicked == true) {
        sideBar.style.left = "-230px";
        btn.classList.add("toggle-btn");
        btn.classList.remove("btn_transform");
        content.style.filter = "opacity(1)";
        isClicked = false;
    }
});
