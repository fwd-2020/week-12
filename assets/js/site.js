// IIFE: Immediately Invoked Function Expression
// This keeps ALL of our custom functions and
// variables OUT of the global scope (that is,
// they will not permanently attach to the window
// object):

// Example of using try/catch to handle errors;
// there is no function called
// `callingANonExistantFunction()`, but this will
// allow JavaScript to keep on truckin'
try {
  callingANonExistantFunction();
} catch(error) {
  console.error("Oh man, it didn't work:", error);
}

(function() {
  console.log("I am immediately invoked!");

  console.log("I am JavaScript. HEAR ME ROAR!");

  function omgClicked(element,message) {
    return function(event) {
      element.innerText = message;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {

    var heading = document.querySelector('h1');
    heading.innerText = "Hello from DOM-Ready JavaScript!";

    heading.addEventListener('click', omgClicked(heading,"OMG Clicked with ARGUMENTS!"));

  });

})();
