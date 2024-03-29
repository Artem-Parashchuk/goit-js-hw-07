const inputElem = document.querySelector('input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

function createBoxes(amount) {
  clearBoxes()

  for(let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    const sizeBox = 30 + i * 10
    box.style.backgroundColor = getRandomHexColor()
    box.style.width = `${sizeBox}px`
    box.style.height = `${sizeBox}px`

    boxes.appendChild(box)
  }
}

createBtn.addEventListener('click', () => {
  const num = Number(inputElem.value)

  if(num >= 1 && num <= 100) {
    createBoxes(num)
    inputElem.value = ''
  } else {
    alert('Please enter a number between 1 and 100.')
  }
})

destroyBtn.addEventListener('click', clearBoxes)

function clearBoxes() {
  boxes.innerHTML = ''
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}