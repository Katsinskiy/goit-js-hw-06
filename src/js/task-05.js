const refs = {
    input: document.querySelector("#name-input"),
    greatingUserOutPut: document.querySelector("#name-output"),
  };
  
  refs.input.addEventListener("input", onInputChange);
  
  function onInputChange(event) {
    refs.greatingUserOutPut.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
      refs.greatingUserOutPut.textContent = "Anonymous";
    }
  }