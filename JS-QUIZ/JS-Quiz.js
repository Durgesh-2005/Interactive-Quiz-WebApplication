//Access the Question Elements
const questionElement1 = document.querySelector('.question1');
const questionElement2 = document.querySelector('.question2');
const questionElement3 = document.querySelector('.question3');
const questionElement4 = document.querySelector('.question4');
const questionElement5 = document.querySelector('.question5');
const questionElement6 = document.querySelector('.question6');
const questionElement7 = document.querySelector('.question7');
const questionElement8 = document.querySelector('.question8');
const questionElement9 = document.querySelector('.question9');
const questionElement10 = document.querySelector('.question10');
//Access the Option Elemts
const optionElements1 = document.querySelectorAll('.options1 input[type="checkbox"]');
const optionElements2 = document.querySelectorAll('.options2 input[type="checkbox"]');
const optionElements3 = document.querySelectorAll('.options3 input[type="checkbox"]');
const optionElements4 = document.querySelectorAll('.options4 input[type="checkbox"]');
const optionElements5 = document.querySelectorAll('.options5 input[type="checkbox"]');
const optionElements6 = document.querySelectorAll('.options6 input[type="checkbox"]');
const optionElements7 = document.querySelectorAll('.options7 input[type="checkbox"]');
const optionElements8 = document.querySelectorAll('.options8 input[type="checkbox"]');
const optionElements9 = document.querySelectorAll('.options9 input[type="checkbox"]');
const optionElements10 = document.querySelectorAll('.options10 input[type="checkbox"]');
//Form Submission
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.querySelector('.result');


//Questions and Options Data Storage
const quizData = {
  question1: '1. What does "JS" stand for in JavaScript?',
  options1: ['Java Syntax', 'JavaScript', 'JustScript', 'JavaScripted'],
  correctOptionIndex1: 1,

  question2: '2. Which keyword is used to declare a variable in JavaScript?',
  options2: ['variable', 'var', 'let', 'const'],
  correctOptionIndex2: 1,

  question3: '3. What is the correct way to write a comment in JavaScript?',
  options3: ['//This is a comment', '<!--This is a comment-->', '/*This is a comment*/', '#This is a comment'],
  correctOptionIndex3: 2,

  question4: '4. How do you write "Hello, World!" in an alert box?',
  options4: ['alertBox("Hello, World!");', 'alert("Hello, World!");', 'msgBox("Hello, World!");', 'message("Hello, World!");'],
  correctOptionIndex4: 1,

  question5: '5. What symbol is used for single-line comments in JavaScript?',
  options5: ['#', '//', '/*', '<!--'],
  correctOptionIndex5: 1,

  question6: '6. Which function is used to parse a string and return an integer in JavaScript?',
  options6: ['parseInt()', 'parseInteger()', 'stringToInt()', 'toInteger()'],
  correctOptionIndex6: 0,

  question7: '7. How do you declare a function in JavaScript?',
  options7: ['function = myFunction()', 'function myFunction()', 'function: myFunction()', 'myFunction: function'],
  correctOptionIndex7: 1,

  question8: '8. What is the result of the expression: "3" + 2?',
  options8: ['5', '32', '6', '23'],
  correctOptionIndex8: 1,

  question9: '9. Which method is used to remove the last element from an array in JavaScript?',
  options9: ['pop()', 'push()', 'shift()', 'unshift()'],
  correctOptionIndex9: 0,

  question10: '10. Which operator is used to compare both value and data type in JavaScript?',
  options10: ['==', '===', '=', '!='],
  correctOptionIndex10: 1,
};


//To load the quiz data into the HTML
function loadQuizData() {
  questionElement1.textContent = quizData.question1;
  questionElement2.textContent = quizData.question2;
  questionElement3.textContent = quizData.question3;
  questionElement4.textContent = quizData.question4;
  questionElement5.textContent = quizData.question5;
  questionElement6.textContent = quizData.question6;
  questionElement7.textContent = quizData.question7;
  questionElement8.textContent = quizData.question8;
  questionElement9.textContent = quizData.question9;
  questionElement10.textContent = quizData.question10;

  for (let i = 0; i < optionElements1.length; i++) {
    const option1Label = document.querySelector(`.options1 .option-${i + 1} label`);
    option1Label.textContent = quizData.options1[i];
  }
  for (let i = 0; i < optionElements2.length; i++) {
    const option2Label = document.querySelector(`.options2 .option-${i + 1} label`);
    option2Label.textContent = quizData.options2[i];
  }
  for (let i = 0; i < optionElements3.length; i++) {
    const option3Label = document.querySelector(`.options3 .option-${i + 1} label`);
    option3Label.textContent = quizData.options3[i];
  }
  for (let i = 0; i < optionElements4.length; i++) {
    const option4Label = document.querySelector(`.options4 .option-${i + 1} label`);
    option4Label.textContent = quizData.options4[i];
  }
  for (let i = 0; i < optionElements5.length; i++) {
    const option5Label = document.querySelector(`.options5 .option-${i + 1} label`);
    option5Label.textContent = quizData.options5[i];
  }
  for (let i = 0; i < optionElements6.length; i++) {
    const option6Label = document.querySelector(`.options6 .option-${i + 1} label`);
    option6Label.textContent = quizData.options6[i];
  }
  for (let i = 0; i < optionElements7.length; i++) {
    const option7Label = document.querySelector(`.options7 .option-${i + 1} label`);
    option7Label.textContent = quizData.options7[i];
  }
  for (let i = 0; i < optionElements8.length; i++) {
    const option8Label = document.querySelector(`.options8 .option-${i + 1} label`);
    option8Label.textContent = quizData.options8[i];
  }
  for (let i = 0; i < optionElements9.length; i++) {
    const option9Label = document.querySelector(`.options9 .option-${i + 1} label`);
    option9Label.textContent = quizData.options9[i];
  }
  for (let i = 0; i < optionElements10.length; i++) {
    const option10Label = document.querySelector(`.options10 .option-${i + 1} label`);
    option10Label.textContent = quizData.options10[i];
  }
}

// Check answers when the submit button is clicked
submitBtn.addEventListener('click', checkAnswers);
// Function to check the user's answers and show the result
function checkAnswers() {

  const selectedOptions1 = Array.from(optionElements1).filter((option) => option.checked);
  const selectedOptions2 = Array.from(optionElements2).filter((option) => option.checked);
  const selectedOptions3 = Array.from(optionElements3).filter((option) => option.checked);
  const selectedOptions4 = Array.from(optionElements4).filter((option) => option.checked);
  const selectedOptions5 = Array.from(optionElements5).filter((option) => option.checked);
  const selectedOptions6 = Array.from(optionElements6).filter((option) => option.checked);
  const selectedOptions7 = Array.from(optionElements7).filter((option) => option.checked);
  const selectedOptions8 = Array.from(optionElements8).filter((option) => option.checked);
  const selectedOptions9 = Array.from(optionElements9).filter((option) => option.checked);
  const selectedOptions10 = Array.from(optionElements10).filter((option) => option.checked);

  if (selectedOptions1.length === 1 && selectedOptions2.length === 1 && selectedOptions3.length === 1 && selectedOptions4.length === 1 && selectedOptions5.length === 1 && selectedOptions6.length === 1 && selectedOptions7.length === 1 && selectedOptions8.length === 1 && selectedOptions9.length === 1 && selectedOptions10.length === 1) {
    const selectedOptionIndex1 = Array.from(optionElements1).indexOf(selectedOptions1[0]);
    const selectedOptionIndex2 = Array.from(optionElements2).indexOf(selectedOptions2[0]);
    const selectedOptionIndex3 = Array.from(optionElements3).indexOf(selectedOptions3[0]);
    const selectedOptionIndex4 = Array.from(optionElements4).indexOf(selectedOptions4[0]);
    const selectedOptionIndex5 = Array.from(optionElements5).indexOf(selectedOptions5[0]);
    const selectedOptionIndex6 = Array.from(optionElements6).indexOf(selectedOptions6[0]);
    const selectedOptionIndex7 = Array.from(optionElements7).indexOf(selectedOptions7[0]);
    const selectedOptionIndex8 = Array.from(optionElements8).indexOf(selectedOptions8[0]);
    const selectedOptionIndex9 = Array.from(optionElements9).indexOf(selectedOptions9[0]);
    const selectedOptionIndex10 = Array.from(optionElements10).indexOf(selectedOptions10[0]);

    const correctOptionIndex1 = quizData.correctOptionIndex1;
    const correctOptionIndex2 = quizData.correctOptionIndex2;
    const correctOptionIndex3 = quizData.correctOptionIndex3;
    const correctOptionIndex4 = quizData.correctOptionIndex4;
    const correctOptionIndex5 = quizData.correctOptionIndex5;
    const correctOptionIndex6 = quizData.correctOptionIndex6;
    const correctOptionIndex7 = quizData.correctOptionIndex7;
    const correctOptionIndex8 = quizData.correctOptionIndex8;
    const correctOptionIndex9 = quizData.correctOptionIndex9;
    const correctOptionIndex10 = quizData.correctOptionIndex10;

    // Function to add the appropriate class to the label
    function setLabelClass(optionElement, isCorrect) {
      const label = optionElement.nextElementSibling;
      label.classList.remove('correct-answer', 'wrong-answer');
      if (isCorrect) {
        label.classList.add('correct-answer'); // Add class for correct answer
      } else {
        label.classList.add('wrong-answer'); // Add class for wrong answer
      }
    }

    if (selectedOptionIndex1 === correctOptionIndex1) {
      setLabelClass(optionElements1[selectedOptionIndex1], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements1[selectedOptionIndex1], false); // Set cross mark for wrong answer
      setLabelClass(optionElements1[correctOptionIndex1], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex2 === correctOptionIndex2) {
      setLabelClass(optionElements2[selectedOptionIndex2], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements2[selectedOptionIndex2], false); // Set cross mark for wrong answer
      setLabelClass(optionElements2[correctOptionIndex2], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex3 === correctOptionIndex3) {
      setLabelClass(optionElements3[selectedOptionIndex3], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements3[selectedOptionIndex3], false); // Set cross mark for wrong answer
      setLabelClass(optionElements3[correctOptionIndex3], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex4 === correctOptionIndex4) {
      setLabelClass(optionElements4[selectedOptionIndex4], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements4[selectedOptionIndex4], false); // Set cross mark for wrong answer
      setLabelClass(optionElements4[correctOptionIndex4], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex5 === correctOptionIndex5) {
      setLabelClass(optionElements5[selectedOptionIndex5], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements5[selectedOptionIndex5], false); // Set cross mark for wrong answer
      setLabelClass(optionElements5[correctOptionIndex5], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex6 === correctOptionIndex6) {
      setLabelClass(optionElements6[selectedOptionIndex6], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements6[selectedOptionIndex6], false); // Set cross mark for wrong answer
      setLabelClass(optionElements6[correctOptionIndex6], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex7 === correctOptionIndex7) {
      setLabelClass(optionElements7[selectedOptionIndex7], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements7[selectedOptionIndex7], false); // Set cross mark for wrong answer
      setLabelClass(optionElements7[correctOptionIndex7], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex8 === correctOptionIndex8) {
      setLabelClass(optionElements8[selectedOptionIndex8], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements8[selectedOptionIndex8], false); // Set cross mark for wrong answer
      setLabelClass(optionElements8[correctOptionIndex8], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex9 === correctOptionIndex9) {
      setLabelClass(optionElements9[selectedOptionIndex9], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements9[selectedOptionIndex9], false); // Set cross mark for wrong answer
      setLabelClass(optionElements9[correctOptionIndex9], true); // Set tick mark for correct answer
    }

    if (selectedOptionIndex10 === correctOptionIndex10) {
      setLabelClass(optionElements10[selectedOptionIndex10], true); // Set tick mark for correct answer
    } else {
      setLabelClass(optionElements10[selectedOptionIndex10], false); // Set cross mark for wrong answer
      setLabelClass(optionElements10[correctOptionIndex10], true); // Set tick mark for correct answer
    }


    submitBtn.disabled = true;
  } else {
    alert("Select ONE option for each Question")
    resultElement.textContent = '';
  }
  document.getElementById("score-card").style.display = "block";
  function calculateScore() {
    const userScore =
      (optionElements1[quizData.correctOptionIndex1].checked ? 1 : 0) +
      (optionElements2[quizData.correctOptionIndex2].checked ? 1 : 0) +
      (optionElements3[quizData.correctOptionIndex3].checked ? 1 : 0) +
      (optionElements4[quizData.correctOptionIndex4].checked ? 1 : 0) +
      (optionElements5[quizData.correctOptionIndex5].checked ? 1 : 0) +
      (optionElements6[quizData.correctOptionIndex6].checked ? 1 : 0) +
      (optionElements7[quizData.correctOptionIndex7].checked ? 1 : 0) +
      (optionElements8[quizData.correctOptionIndex8].checked ? 1 : 0) +
      (optionElements9[quizData.correctOptionIndex9].checked ? 1 : 0) +
      (optionElements10[quizData.correctOptionIndex10].checked ? 1 : 0);

    return userScore;
  }
  const userScore = calculateScore();
  document.getElementById("score").innerHTML = (`Your Score: ${userScore}/10`);
}
document.getElementById('retake-btn').addEventListener('click', () => {
  // Refresh the page to reset the quiz
  location.reload();
});
// Load quiz data when the page loads
window.addEventListener('load', loadQuizData);


