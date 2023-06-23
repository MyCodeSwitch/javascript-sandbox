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