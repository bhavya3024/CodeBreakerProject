let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(validateInput(input.value)){
        attempt++;
    }
    else{
        setMessage(message);
        return false;
    }
    if(annswer === ''|| attempt === '')
    setHiddenFields();

}
//implement new functions here
function setHiddenFields(){
 answer.value = Math.floor(Math.random()*10000).toString();
 attempt = 0;
  while(answer.value.length < 4){
      answer.value = '0'+ answer.value;
  }
}
function setMessage(message){
   message.innerHTML = "Guesses must be exactly 4 characters long.";
}
function validateInput(input){
   if(input.length === 4){
       return true;
   }
   else{
       return false;
   }
}

