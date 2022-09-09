const refs = {
    input: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
  };
  
  refs.input.addEventListener("input", onInputChangeFontSize);
  
  function onInputChangeFontSize() {
    refs.spanText.style.fontSize = refs.input.value + "px";
  }