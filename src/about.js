export default function () {
  const about = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = "We are incognito, you can't have any info about us";
  about.append(text);
  about.classList.add("about");
  return about;
}
