export default function () {
  const footer = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = "Copyright belogns to - gwynbleidd0014";
  footer.append(text);
  footer.classList.add("footer");
  return footer;
}
