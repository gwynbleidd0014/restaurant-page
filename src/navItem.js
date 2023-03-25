export default function (textContent) {
  const ancor = document.createElement("a");
  const button = document.createElement("button");
  ancor.classList.add("nav-item");
  ancor.classList.add(`${textContent.toLowerCase()}`);
  button.classList.add("nav-button");
  button.dataset.text = textContent;
  button.textContent = textContent;
  ancor.appendChild(button);
  return ancor;
}
