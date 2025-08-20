const clock = document.querySelector('#clock')
console.log(clock)





setInterval(function(){
    let now = new Date();
    const ans = now.toLocaleTimeString()
clock.innerHTML= `<span>${ans}</span>`
},1000)

