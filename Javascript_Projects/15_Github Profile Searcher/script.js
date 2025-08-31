//DOM EL
const input = document.getElementById('input-search')
const searchBtn = document.querySelector('button')
const resultContainer = document.querySelector(".result-container")
const img = document.querySelector('img')
const statsContainer = document.querySelector('stats-container')
const accountName = document.querySelector(".account-name")
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const repos = document.getElementById('repos')

//*

// URLs
//const API = "https://api.github.com/users/{username}";
// const Followers = "https://api.github.com/users/HarshGupta-09/followers";
// const Following = "https://api.github.com/users/HarshGupta-09/following";
// 

searchBtn.addEventListener('click', ()=>{
let username = input.value;

updateDisplay(username);
})

input.addEventListener('keypress', (e)=>{
     if (e.key === "Enter"){
let username = input.value;

updateDisplay(username);
     } 

})

 async function updateDisplay(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await  response.json();
    console.log(data)
    resultContainer.style.display = "block";
    resultContainer.style.display = "flex";
   const name = data.login;
   accountName.innerText = `${name}`;
   updateFollwers(username);
   updateFollowing(username);
   updateRepos(username);
   updateAvtaar(username);
   input.value = "";

}
async function  updateFollwers(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json();
  const totalFollow=   data.followers
  followers.innerText = `${totalFollow}`


}
async function  updateFollowing(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json();
  const totalFollowing=   data.following
  following.innerText = `${totalFollowing}`


}
async function  updateRepos(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json();
  const totalrepos=   data.public_repos
  repos.innerText = `${totalrepos}`


}
async function  updateAvtaar(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json();
  const avtaar=   data.avatar_url
 img.setAttribute('src',avtaar);


}