import mainHeading from "./mainHeading";
import ramen from "./ramen";

export default function () {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  homePage.appendChild(mainHeading());
  homePage.appendChild(ramen());
  return homePage;
}
