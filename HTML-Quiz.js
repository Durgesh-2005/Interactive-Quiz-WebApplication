const questionElement1 = document.querySelector('.question1');
const questionElement2 = document.querySelector('.question2');
const optionElements1 = document.querySelectorAll('.options1 input[type="checkbox"]');
const optionElements2 = document.querySelectorAll('.options2 input[type="checkbox"]');
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.querySelector('.result');

// Sample question and options (you can replace these with your own questions and options)
const quizData = {
  question1: '1. What is the full form of HTML?',
  options1: ['Hypertext Markup Language', 'Hyperlink Markup Language', 'Hypertext Market and Text Markup Language', 'None of the Above'],
  correctOptionIndex1: 0, // Index of the correct option (0 for the first option, 1 for the second, and so on)

  question2: '2. Which one is the correct sequence of HTML tags.',
  options2: ['head, body, title, html', 'html, head, title, body', 'html, title, head, body', 'None of the above'],
  correctOptionIndex2: 1, // Index of the correct option (0 for the first option, 1 for the second, and so on)
};

// Function to load the quiz data into the HTML
function loadQuizData() {
  questionElement1.textContent = quizData.question1;
  questionElement2.textContent = quizData.question2;

  for (let i = 0; i < optionElements1.length; i++) {
    const option1Label = document.querySelector(`.options1 .option-${i + 1} label`);
    option1Label.textContent = quizData.options1[i];
  }
  for (let i = 0; i < optionElements2.length; i++) {
    const option2Label = document.querySelector(`.options2 .option-${i + 1} label`);
    option2Label.textContent = quizData.options2[i];
  }
}

// Function to check the user's answers and show the result
function checkAnswers() {
  const selectedOptions1 = Array.from(optionElements1).filter((option) => option.checked);
  const selectedOptions2 = Array.from(optionElements2).filter((option) => option.checked);

  if (selectedOptions1.length === 1 && selectedOptions2.length === 1) {
    const selectedOptionIndex1 = Array.from(optionElements1).indexOf(selectedOptions1[0]);
    const selectedOptionIndex2 = Array.from(optionElements2).indexOf(selectedOptions2[0]);

    const correctOptionIndex1 = quizData.correctOptionIndex1;
    const correctOptionIndex2 = quizData.correctOptionIndex2;

    if (selectedOptionIndex1 === correctOptionIndex1) {
      optionElements1[selectedOptionIndex1].nextElementSibling.classList.add('correct-answer');
    } else {
      optionElements1[selectedOptionIndex1].nextElementSibling.classList.add('wrong-answer');
    }

    if (selectedOptionIndex2 === correctOptionIndex2) {
      optionElements2[selectedOptionIndex2].nextElementSibling.classList.add('correct-answer');
    } else {
      optionElements2[selectedOptionIndex2].nextElementSibling.classList.add('wrong-answer');
    }

    submitBtn.disabled = true;
  } else {
    resultElement.textContent = 'Please select one option for each question.';
  }
}

// Load quiz data when the page loads
window.addEventListener('load', loadQuizData);

// Check answers when the submit button is clicked
submitBtn.addEventListener('click', checkAnswers);
