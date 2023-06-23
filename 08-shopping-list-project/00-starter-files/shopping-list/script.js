<<<<<<< HEAD
//Jing's Code//
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filter = document.querySelector('#filter');


function addItem(e){
  e.preventDefault();

  //get input value
  const newItem = input.value;
  
  //validate input
  if(newItem === ''){
    alert('please add an item');
    return;
  }

  //create list item
  const li = document.createElement('li');

  const botton = document.createElement('button');
  botton.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  
  botton.appendChild(icon);
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(botton);

  //add li to the DOM
  list.appendChild(li);


  //Set Filter & Clear bottons
  checkUI();

  //reset input value 
  input.value = '';
}

function removeItem(e){
  if (e.target.parentElement.classList.contains('remove-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
}

function clearItems(){
  while(list.firstChild){
    list.firstChild.remove();
  }
  checkUI();
}


function checkUI(){
  const listedItems = list.querySelectorAll('li');

  if (listedItems.length === 0){
    filter.style.display = 'none';
    clearBtn.style.display = 'none';
  }else{
    filter.style.display = 'block';
    clearBtn.style.display = 'block';
  }
};


function filterItems(e){
  const filterText = e.target.value.toLowerCase();
  const listedItems = list.querySelectorAll('li');

  listedItems.forEach(i => {
    //get item text
    const itemText = i.innerText.toLowerCase();

    //filter using includes()
    i.style.display = itemText.includes(filterText) ? 'flex' : 'none';

    
    // if(itemText.includes(filterText)){
    //   i.style.display = 'flex';
    // }else{
    //   i.style.display = 'none';
    // }
  })
  
}

form.addEventListener('submit', addItem);
list.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filter.addEventListener('input', filterItems);

checkUI();
=======
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearButton = document.querySelector('#clear');


function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;

    if(newItem === ''){
        alert('please add an item');
        return;
    }

    const li = document.createElement('li');

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(button);
    
    itemList.appendChild(li);

    itemInput.value = '';
   
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
    if (e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    };
}


function clearItems(){
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

function scheckUI(){
    
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems)


//Aiaine
>>>>>>> ca5b965ccaf93ffd0581fd44e3c8c16d8dbad64c
