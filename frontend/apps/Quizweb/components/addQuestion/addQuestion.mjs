document.getElementById('addQuestionForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const question = {
    question_text: document.getElementById('questionText').value,
    option1: document.getElementById('option1').value,
    option2: document.getElementById('option2').value,
    option3: document.getElementById('option3').value,
    option4: document.getElementById('option4').value,
    correct_answer: document.getElementById('correctAnswer').value
  };

  try {
    const response = await fetch('http://localhost:3000/api/addQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    });
    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      document.getElementById('addQuestionForm').reset();
    } else {
      alert('Failed to add question: ' + result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to add question');
  }
});
