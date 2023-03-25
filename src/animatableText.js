export default function (text) {
  let finalText = "";
  for (let i = 0; i < text.length; i++) {
    finalText += `<span class='animate'>${text[i]}</span>`;
  }
  console.log(text);
  return finalText;
}
