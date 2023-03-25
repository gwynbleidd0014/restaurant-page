export default function (source, textContent) {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardImgWrapper = document.createElement("div");
  cardImgWrapper.classList.add("card-img-wrapper");
  const cardName = document.createElement("p");
  cardImg.src = source;
  cardImg.classList.add("card-img");
  cardName.classList.add("card-name");
  card.classList.add("card");
  cardName.textContent = textContent;
  cardImgWrapper.appendChild(cardImg);
  card.append(cardImgWrapper, cardName);
  return card;
}
