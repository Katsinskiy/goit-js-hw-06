function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
console.log(document.body);
button.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor() {
  const rundomColor = getRandomHexColor();
  document.body.style.backgroundColor = rundomColor;
  spanColor.innerHTML = rundomColor;
}