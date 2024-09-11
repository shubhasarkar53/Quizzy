import { quizData } from "./data.js";

//select all the fields
const question = document.querySelector("#question");
const aText = document.querySelector("#a_text");
const bText = document.querySelector("#b_text");
const cText = document.querySelector("#c_text");
const dText = document.querySelector("#d_text");
const form = document.querySelector("form");
const submit = document.querySelector("#submit");

//qus load 
// chnage on submit 
// find correct

let index = 0; //intialize index to zero bacause after eveey submit we need to go to the next question.
let correctAns = 0; // storing the correct aswer
loadData(); //funtion call for the first time to load question.

//Load the Questions
function loadData(){
  clearRadio();
  let currEl = quizData[index];
  question.innerText = currEl.question;
  aText.innerText = currEl.a;
  bText.innerText = currEl.b;
  cText.innerText = currEl.c;
  dText.innerText = currEl.d;
}

// clear the options after submitting one question
function clearRadio(){
  var ele = document.getElementsByName("answer");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}

//question submit btn
submit.addEventListener("click", handleSubmit);

//submit function
function handleSubmit(e) {
  e.preventDefault();
  let answerQuestion = document.querySelector('input[name="answer"]:checked').value;
  storeCorrect(answerQuestion);

  if( index+1<quizData.length){
    index = index+1;
    loadData();
   
  }else{
    showScore();
    return;
  }
}

// function to store the correct answer
function storeCorrect(answerQuestion){
  // console.log(quizData[index].correct)
  console.log(answerQuestion)
  if(quizData[index].correct == answerQuestion){
    correctAns =  correctAns+1;
    // console.log(correctAns);
  }
  
}
//function to show the score
function showScore(){
  form.style.display = "none";
  question.innerText = `Your Score is ${correctAns} out of ${quizData.length}`
}


