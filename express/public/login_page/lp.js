document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality or redirect to another page
    alert('Login functionality to be implemented.');
});

function logIn() { 
let email = document.getElementById ("email").value
let password = document.getElementById ("password").value

fetch ("http://localhost:3000/login" ,{
headers:{"Content-Type": "application/json"}, 
body:JSON.stringify({"email":email,"password":password}),
method:"POST"
})
.then(response=>{
    return response.json()
})
.then(json => {
    document.cookie=json
    console.log(json)
})
} 