// window.addEventListener('keydown', (e)=>{
//   const insert = document.querySelector('#insert');

//   insert.innerHTML = `
//   <div class="key">
//     ${e.key === " " ? "space" : (e.key === "j" ? "Jing" : e.key)}
//     <small>e.key</small>
//   </div>
      
//   <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//   </div>
      
//   <div class="key">
//     ${e.code}
//     <small>e.code</small>
//   </div>`;
// });

function showKeyCodes(e){
  const insert = document.querySelector('#insert');
  insert.innerHTML = "";
  
  const keyCodes = {
    'e.key | keyboard': e.key === " " ? "space" : (e.key === "j" ? "Jing" : e.key),
    'e.keyCode' : e.keyCode,
    'e.code': e.code,
  }

  for (let x in keyCodes) {

    const div = document.createElement('div');
    div.className = "key";
    const small = document.createElement('small');
    const theText = document.createTextNode(x);
    const theValue = document.createTextNode(keyCodes[x]);

    small.appendChild(theText);
    div.appendChild(small);
    div.appendChild(theValue);

    insert.appendChild(div);
  }


}

window.addEventListener("keydown", showKeyCodes)
