// IIFE: Immediately Invoked Function Expression
// This keeps ALL of our custom functions and
// variables OUT of the global scope (that is,
// they will not permanently attach to the window
// object):

(function() {
  console.log("I am immediately invoked!");

  console.log("I am JavaScript. HEAR ME ROAR!");

  function omgClicked(event) {
    event.target.innerText = 'OMG you know what my target was, from a function!';
  }

  document.addEventListener('DOMContentLoaded', function() {

    var heading = document.querySelector('h1');
    heading.innerText = "Hello from DOM-Ready JavaScript!";

    heading.addEventListener('click', omgClicked);

  });

})();
