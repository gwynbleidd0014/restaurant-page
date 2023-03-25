import header from "./header";
import homePage from "./homePage";
import menuPage from "./menuPage";
import footer from "./footer";
import aboutPage from "./about";

const content = document.querySelector("#content");
renderPage(homePage());
updateEventListeners();

function renderPage(element) {
  content.innerHTML = "";
  content.append(header(), element, footer());
  updateEventListeners();
}

function updateEventListeners() {
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  home.addEventListener("click", () => {
    renderPage(homePage());
  });
  menu.addEventListener("click", () => {
    renderPage(menuPage());
  });

  about.addEventListener("click", () => {
    renderPage(aboutPage());
  });
}
