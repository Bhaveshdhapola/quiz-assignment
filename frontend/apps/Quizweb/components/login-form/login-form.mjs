document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:9090/apps/Quizweb/apis/login.js', {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }); 

  if (response.ok) {
    const data = await response.json();
    const userRole = data.user.role;

    
    if (userRole === 'admin') {
      window.location.href = '../admin.html';
    } else {
      window.location.href = '../user.html';
    }
  } else {
    const errorData = await response.json();
    alert(errorData.message || 'Login failed. Please check your credentials.');
  }
});







