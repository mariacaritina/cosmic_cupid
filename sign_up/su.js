document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation and submission here
    alert('Sign up successful! Redirecting to home page.');
    window.location.href = 'index.html';
});