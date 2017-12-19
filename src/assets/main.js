let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(validateInput(input.value)){
        attempt++;
    }
    else{
        return false;
    }
    if(annswer === ''|| attempt === '')
    setHiddenFields();

}
//implement new functions here
function setHiddenFields(){
 answer = Math.floor(Math.random()*10000).toString();
 attempt = 0;
   if(answer.length === 3){
       answer = '0'+answer;
   }
   else if(answer.length === 2){
       answer = '00'+answer;
   }
   else if(answer.length === 1){
       answer = '000'+answer;
   }
}
function setMessage(message){
   document.getElementById("message").innerHTML = message;
}
function validateInput(input){
   if(input.length === 4){
       return true;
   }
   else{
       setMessage("Guesses must be exactly 4 characters long");
       return false;
   }
}

