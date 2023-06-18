const listItems = document.querySelectorAll("li");
const list = document.querySelector('ul');

list.addEventListener('click', (e)=>{
  if(e.target.tagName === "LI"){
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e)=>{
  if(e.target.tagName === "LI"){
    e.target.style.backgroundColor = "yellow";
    e.target.style.cursor = "pointer";
  }
});

list.addEventListener('mouseout', (e)=>{
  if(e.target.tagName === "LI"){
    e.target.style.backgroundColor = "";
  }
});
