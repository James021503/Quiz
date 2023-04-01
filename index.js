function calc(){

   let operator = document.getElementById("operator").value;
   let numOne = document.getElementById("numOne").value;
   let numTwo = document.getElementById("numTwo").value;

   numOne = Number(numOne);
   numTwo = Number(numTwo);

   let answer = document.getElementById("answer");

   switch(operator){
      case '+':
        answer.innerHTML = numOne + numTwo;
        break;
      case '-':
        answer.innerHTML = numOne - numTwo;
        break;
      case '*':
        answer.innerHTML = numOne * numTwo;
        break;
      case '/':
        answer.innerHTML = numOne / numTwo;
        break;
      default:
        answer.innerHTML = "Invalid Input"
   }
}




