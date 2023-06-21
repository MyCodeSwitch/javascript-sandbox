const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

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

itemForm.addEventListener('submit', addItem);
