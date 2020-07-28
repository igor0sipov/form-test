var inputButton = document.querySelector(".form__visible-button");
var hiddenInput = document.querySelector(".form__file");

function hiddenClick(){
  hiddenInput.click();
}

function changeText(){
    inputButton.innerHTML = hiddenInput.files[0].name;
}

inputButton.addEventListener("click", hiddenClick);
hiddenInput.addEventListener("change", changeText);
