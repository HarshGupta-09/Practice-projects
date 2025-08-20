const body = document.querySelector('body');

const buttons = document.querySelectorAll(".button");
console.log("hello")

buttons.forEach(function(button){
 button.addEventListener('click',change)
});
function change(e){
  if(e.target.id === 'grey'){
    body.style.background = e.target.id
  }
  else if(e.target.id === 'blue'){
    body.style.background = e.target.id
  }
  else if(e.target.id === 'yellow'){
    body.style.background = e.target.id
  }
  else if(e.target.id === 'white'){
    body.style.background = e.target.id
  }
  else{
    alert("click in under these box to change the color")
  }
}