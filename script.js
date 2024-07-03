var elForm = document.querySelector("#js-form"),
  elInput = document.querySelector("#js-input"),
  elSelect = document.querySelector("#js-select"),
  elText = document.querySelector("#js-answer");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var inputValue = +elInput.value;
  var selectValue = +elSelect.value;
  if (inputValue !== NaN) {
    elText.textContent = inputValue * selectValue;
  } else {
    elText.textContent = `siz raqam emas harif kiritdingiz`;
  }
});
