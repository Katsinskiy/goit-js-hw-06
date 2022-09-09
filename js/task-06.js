const refs = {
    input: document.querySelector("#validation-input"),
    dataLength: +document.querySelector("#validation-input").dataset.length,
  };
  
  refs.input.addEventListener("blur", (parametr) =>
    onInputLoseBlur(parametr.currentTarget.value.length)
  );
  
  function onInputLoseBlur(event) {
    refs.input.className = event === refs.dataLength ? "valid" : "invalid";
  }