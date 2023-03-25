import card from "./card";
import sasuke from "./sasuke-card.png";
import naruto from "./naruto-card.png";

export default function () {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
  const card1 = card(sasuke, "Sasuke");
  const card2 = card(naruto, "Naruto");
  menuPage.append(card1, card2);
  return menuPage;
}
