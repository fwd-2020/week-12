// IIFE: Immediately Invoked Function Expression

(function() {
  console.log("I am immediately invoked!");
  var fruit = "Apple";
  var alert = "OMG RUN!!!";
  alert('Hey, here is an alert');
})();

var vegetable = "Carrot";


console.log("I am JavaScript. HEAR ME ROAR!");

function omgClicked(event) {
  event.target.innerText = 'OMG you know what my target was, from a function!';
}

document.addEventListener('DOMContentLoaded', function() {
  var heading = document.querySelector('h1');
  heading.innerText = "Hello from DOM-Ready JavaScript!";

  heading.addEventListener('click', omgClicked);

});
