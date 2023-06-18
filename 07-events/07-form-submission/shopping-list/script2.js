const  form = document.querySelector('#item-form');

function onSubmit(e){
  e.preventDefault();
  
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById ('priority-input').value;

  if (item === ""){
    alert ("what is the item? stupid")
    return;
  }

  if (priority === "0"){
    alert ("what is the priority? idiot")
    return;
  }

  const heading = document.querySelector('h1');
  heading.textContent = `${priority}: ${item}`



}


form.addEventListener('submit', onSubmit);