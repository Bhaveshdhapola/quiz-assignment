
function addQuestion(event) {
    event.preventDefault(); 
  
    // Get form data
    var questionId = document.getElementById('questionId').value;
    var questionText = document.getElementById('questionText').value;
    var options = document.getElementById('options').value.split(',').map(option => option.trim());
    var correctAnswer = document.getElementById('correctAnswer').value;
  
    // Create question object
    var question = {
      id: questionId,
      text: questionText,
      options: options,
      correctAnswer: correctAnswer
    };
  
    // Store question in localStorage
    var questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  
    // Clear form fields (optional)
    document.getElementById('addQuestionForm').reset();
  
    // Redirect to viewQuestion.html (optional)
    window.location.href = './viewQuestions.html';
  }
  












