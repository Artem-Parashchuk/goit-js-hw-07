const inputElem = document.querySelector('#name-input')
const outputElem = document.querySelector('#name-output')

inputElem.addEventListener('input', (event) => {
    if(inputElem.value.trim() === '') {
        outputElem.textContent = 'Anonymous'
    } else {
        outputElem.textContent = event.currentTarget.value;
    }
})