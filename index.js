document.querySelectorAll('input').forEach( input => {
  input.addEventListener('click', () => {
    if(document.body.style.background !== input.value){
      document.body.style.background = `${input.value}`
    };
  });
});