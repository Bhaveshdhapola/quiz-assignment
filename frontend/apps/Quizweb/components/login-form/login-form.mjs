document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      // Fetch the users.json file
      const response = await fetch('users.json');
      if (!response.ok) {
        throw new Error('Failed to load user data');
      }
  
      const data = await response.json();
      const users = data.users;
  
      
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        const userRole = user.role;
  
      
        if (userRole === 'admin') {
          window.location.href = '../../admin.html';
        } else if (userRole === 'user') {
          window.location.href = '../../users.html';
        } else {
          alert('Unknown user role.');
        }
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });
  






















