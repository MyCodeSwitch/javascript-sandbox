const textInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

function onInput(e){
  heading.textContent = (e.target.value);
}

function onChecked(e){
  const isChecked = e.target.checked;
  heading.style.color = isChecked ? "blue" : "red";
}

function onFocus (){
  console.log("Input is focused");
  textInput.style.outlineStyle = "solid";
  textInput.style.outlineWidth = "2px";
  textInput.style.outlineColor = "green";
  heading.textContent = "Wow";

}

function onBlur(){
  console.log("left!");
  textInput.style.outlineStyle = "";
  heading.textContent = "Shopping List";
}


textInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);

textInput.addEventListener('focus', onFocus);
textInput.addEventListener('blur', onBlur);