async function fetchQuizzes() {
    try {
        const response = await fetch('http://localhost:3000/api/quizzes');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        return [];
    }
}

function renderQuizzes(quizzes) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('quiz');
        
        quizElement.innerHTML = `
            <div class="quiz-title">${quiz.question_text}</div>
            <div class="quiz-description">Test your knowledge with this quiz.</div>
            <div class="quiz-actions">
                <button class="btn" data-quiz-id="${quiz.id}">Start Quiz</button>
            </div>
        `;

        quizContainer.appendChild(quizElement);
    });

    handleQuizStart();
}

function handleQuizStart() {
    const startButtons = document.querySelectorAll('.btn');
    
    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quizId = button.getAttribute('data-quiz-id');
            console.log(quizId);
            navigateToQuizPage(quizId);
        });
    });
}

function navigateToQuizPage(quizId) {
    const quizPage = `quiz${quizId}.html`;
    window.location.href = quizPage;
}

document.addEventListener('DOMContentLoaded', async () => {
    const quizzes = await fetchQuizzes();
    renderQuizzes(quizzes);
});
