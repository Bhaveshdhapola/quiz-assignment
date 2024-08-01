document.addEventListener('DOMContentLoaded', () => {
  const questionsContainer = document.getElementById('questionsContainer');

  
  function displayQuestions(questions) {
    questionsContainer.innerHTML = '';
    if (questions.length === 0) {
      questionsContainer.innerHTML = '<p>No questions available.</p>';
      return;
    }
    questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `
        <p><strong>Question:</strong> ${question.questionText}</p>
        <ul>
          ${question.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
        <p><strong>Correct Answer:</strong> ${question.correctAnswer}</p>
        <button class="deleteButton" data-index="${index}">Delete</button>
      `;
      questionsContainer.appendChild(questionElement);
    });

    
    document.querySelectorAll('.deleteButton').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        deleteQuestion(index);
      });
    });
  }

  
  function deleteQuestion(index) {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(questions));
    displayQuestions(questions);
  }

  
  function loadQuestions() {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    displayQuestions(questions);
  }

  loadQuestions();
});



