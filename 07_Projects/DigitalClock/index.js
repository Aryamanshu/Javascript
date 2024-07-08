const clock = document.getElementById('clock');

// console.log(date.toLocaleTimeString());


// setInterval(function(){}, 1000) // remember the syntax very imp
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1 sec pause 


