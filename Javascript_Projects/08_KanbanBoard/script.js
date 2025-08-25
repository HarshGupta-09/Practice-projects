const cards = document.querySelectorAll(".card")
const lists = document.querySelectorAll(".list")
console.log(cards)
console.log(lists)
for(const card of cards){
card.addEventListener('dragstart',dragStart);
card.addEventListener('dragend',dragEnd);

}
for(const list of lists){
    list.addEventListener("dragover",dragover)
    list.addEventListener("dragenter",dragEnter)
    list.addEventListener("dragleave",dragLeave)
    list.addEventListener("drop",dragDrop)
}

function dragStart(e){
e.dataTransfer.setData("text/plain",this.id)

}
function dragEnd(){
    console.log("Drag ended")


}
function dragover(e){
e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  this.appendChild(card);
  this.classList.remove("over");
}