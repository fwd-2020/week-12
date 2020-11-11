console.log("I am JavaScript. HEAR ME ROAR!");

document.addEventListener('DOMContentLoaded', function() {
  var heading = document.querySelector('h1');
  heading.innerText = "Hello from DOM-Ready JavaScript!";

  heading.addEventListener('click', function() {
    heading.innerText = "OMG you just clicked me!!!";
  })

});
