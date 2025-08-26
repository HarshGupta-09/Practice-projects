const addBookmarkbtn = document.getElementById("add-bookmark") 
const bookmarkList = document.getElementById("bookmark-list")
const bookmarkNameInput = document.getElementById("bookmark-name")
const bookmarkUrlInput = document.getElementById("bookmark-url")

addBookmarkbtn.addEventListener("click",function(){

const name = bookmarkNameInput.value.trim();
const url = bookmarkUrlInput.value.trim();
if(!name || !url){
alert ("Plase enter both the fields")
return;
}

updateDisplay(name , url);
bookmarkNameInput.value = "";
bookmarkUrlInput.value = "";

});

function updateDisplay(name , url){
    let list = document.createElement("li")
    list.target = "_blank"
    let removeBtn = document.createElement("button")
   list.innerHTML = `  <a href="${url}">${name}</a>
           `
removeBtn.textContent = "Remove"
removeBtn.addEventListener("click",()=>{
     console.log("cliked")
    bookmarkList.removeChild(list);
})
list.appendChild(removeBtn);
bookmarkList.append(list);


}