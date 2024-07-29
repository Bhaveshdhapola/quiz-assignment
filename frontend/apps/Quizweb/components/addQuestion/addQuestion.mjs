document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addQuestionForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const questionText = document.getElementById('questionText').value;
    const options = document.getElementById('options').value.split(',').map(option => option.trim());
    const correctAnswer = document.getElementById('correctAnswer').value;

  
    const lastQuizId = parseInt(localStorage.getItem('lastQuizId'), 10) || 0;
    const newQuizId = lastQuizId + 1;

    
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const newQuestion = {
      quizId: newQuizId,
      questionText,
      options,
      correctAnswer
    };
    questions.push(newQuestion);
    localStorage.setItem('questions', JSON.stringify(questions));

    
    localStorage.setItem('lastQuizId', newQuizId);

    
    form.reset();

    
    successMessage.style.display = 'block';
    
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });
});
