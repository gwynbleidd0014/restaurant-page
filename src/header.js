import navItem from "./navItem";
import "./style.css";
import Logo from "./logo.png";

export default function () {
  const header = document.createElement("div");
  const nav = document.createElement("div");
  const logo = document.createElement("img");

  header.classList.add("header");
  nav.classList.add("nav");
  logo.classList.add("logo");
  logo.src = Logo;

  const item1 = navItem("Home");
  const item2 = navItem("Menu");
  const item3 = navItem("About");
  nav.append(logo, item1, item2, item3);
  header.appendChild(nav);
  return header;
}
