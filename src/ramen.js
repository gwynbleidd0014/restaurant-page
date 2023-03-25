import Ramen from "./ramen.png";

export default function () {
  const ramen = document.createElement("img");
  ramen.src = Ramen;
  ramen.classList.add("ramen");
  return ramen;
}
