let counterValue = 0;

const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};

refs.decrementButton.addEventListener("click", onDecButtonClick);

function onDecButtonClick() {
  refs.span.textContent = counterValue -= 1;
}
refs.incrementButton.addEventListener("click", onInkButtonClick);

function onInkButtonClick() {
  value.innerHTML = counterValue += 1;
}