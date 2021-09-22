const menuIcon = document.querySelector(".hamburger-menu");

menuIcon.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("change");
});