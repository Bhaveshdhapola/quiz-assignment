document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assignQuizForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userEmail = document.getElementById('userEmail').value;
    const quizId = document.getElementById('quizId').value;

    
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const assignedQuizzes = JSON.parse(localStorage.getItem('assignedQuizzes')) || [];

    
    const quizExists = questions.some(question => question.quizId == quizId);

    if (quizExists) {
      const newAssignment = {
        userEmail,
        quizId
      };

    
      assignedQuizzes.push(newAssignment);

      
      localStorage.setItem('assignedQuizzes', JSON.stringify(assignedQuizzes));


      form.reset();

    
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';

  
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    } else {
  
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';

      
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);
    }
  });
});



