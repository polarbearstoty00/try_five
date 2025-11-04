const startBtn = document.getElementById("startBtn");
const titleScreen = document.getElementById("title-screen");
const mainMenu = document.getElementById("main-menu");

startBtn.addEventListener("click", () => {
    titleScreen.style.display = "none";
    mainMenu.style.display = "block";
});
