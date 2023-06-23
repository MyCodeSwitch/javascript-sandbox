const p = document.querySelectorAll('p');

window.addEventListener("scroll", ()=>{

  if (window.scrollY > 100){
    p.forEach(function (e){
      e.style.color = "yellow";
      e.style.backgroundColor = "black";
    })
  }else{
    p.forEach(function(e){
      e.style.color = "white";
      e.style.backgroundColor = "white";
    })
  }
})





