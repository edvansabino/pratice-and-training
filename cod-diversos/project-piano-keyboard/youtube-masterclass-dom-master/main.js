// get all keys
const myKeys = document.querySelectorAll(".keys")

console.log(myKeys);


// play notes
function playNote(event){
  console.log(event);
}

// click with mouse

//keyboard type
window.addEventListener("keydown", playNote)