const itemInput = document.querySelector('#item-input');

const onKeyPress = e => {
  console.log('keypress');
};

const onKeyUp = e => {
  console.log('key upped');
};

const onKeyDown = e => {
  if (e.key === "j"){
    const h1 = document.querySelector('h1');
    h1.innerText = "you got Jing!";
  }

  if (e.keyCode === 13){
    alert("enter pressed");
  }

  if (e.code === 'Digit1'){
    console.log("1!");
  }

  if (e.repeat){
    console.log("you are holding down " + e.key);
  }

};


//itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
