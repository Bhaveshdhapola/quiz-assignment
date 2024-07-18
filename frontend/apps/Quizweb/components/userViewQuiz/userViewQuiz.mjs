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


//  navigate to the quiz page based on quizId
function navigateToQuizPage(quizId) {
    const quizPage = `quiz${quizId}.html`;
    window.location.href = quizPage;
}

// Event listener to initialize after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleQuizStart();
});
