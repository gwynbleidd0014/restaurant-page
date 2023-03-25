import animate from "./animatableText";
import sasuke from "./sasuke-card.png";

export default function () {
  const headingWrapper = document.createElement("div");
  const heading = document.createElement("h1");
  const subHeading = document.createElement("span");
  headingWrapper.classList.add("heading-wrapper");
  heading.id = "main-heading";
  subHeading.classList.add("sub-heading");
  subHeading.textContent = "PLACE OF UNIQUE TASTE";
  heading.innerHTML = animate("KOARAMEN");
  headingWrapper.appendChild(heading);
  headingWrapper.appendChild(subHeading);
  return headingWrapper;
}
