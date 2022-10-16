const contador = document.querySelector('#descricao');

console.log(contador);

contador.addEventListener("keypress", function(e) {
  
  const inputLength = contador.value.length;
  const maxChars = 15;

  if (inputLength >= maxChars) {
    e.preventDefault();
    console.log('Máximo de caracteres chegou!');
  }

});