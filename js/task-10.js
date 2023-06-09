const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    refs.boxes.appendChild(div);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.createBtn.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
