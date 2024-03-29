const changeBtn = document.querySelector('.change-color')
changeBtn.addEventListener('click', changeBgColor)

const colorEl = document.querySelector('.color')

function changeBgColor() {
  let resColor = getRandomHexColor();
  document.body.style.backgroundColor = resColor;
  colorEl.innerHTML = resColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
