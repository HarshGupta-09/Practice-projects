
const form = document.querySelector('form')



form.addEventListener('submit',function(e){
  e.preventDefault();
  const ht = parseInt(document.querySelector('#height').value);
  const wt = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if(ht === '' || ht < 0 || isNaN(ht)){
    results.innerHTML= "Please give Valid Height"
  }
   else if(wt === '' || wt < 0 || isNaN(wt)){
    results.innerHTML = "Pleae give valid weight"
  }
  else{
    results.innerHTML  = (wt / ((ht*ht)/10000 )).toFixed(2)
  }

})




// height.addEventListener('input',(e)=>{
//   console.log(height.value)
// console.log(weight.value)
// })


