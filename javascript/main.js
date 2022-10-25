
const form = document.getElementById('formOne');



form.addEventListener('submit', function(e){
  
    e.preventDefault();
    const numberOne = document.getElementById('numberA');
    const numberTwo = document.getElementById('numberB');
    const message = document.querySelector('.message');
    const messageSuccess = `O numero do campo A : <b>${numberOne.value}</b> e menor que o do campo B: <b>${numberTwo.value}</b>, Portanto consideramos as entradas validas.`;
    const messageError = `O numero do campo B deve ser maiot que o do campo A, essas entradas não são validas`;
    if(numberOne.value < numberTwo.value){
    
        message.style.color = 'black';
        message.style.display = 'block';
        message.innerHTML = messageSuccess;

    }
    else{

        message.style.color = 'red';
        message.style.display = 'block';
        message.innerHTML = messageError;

    
    }
    

   
    const timerOfMessage = setTimeout(clearMessage, 2000);
    function clearMessage(){

        message.style.display = 'none';
        message.innerHTML = '';
        numberOne.value = '';
        numberTwo.value = '';
    
    }
   

    
    

});

