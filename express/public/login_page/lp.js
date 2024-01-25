document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality or redirect to another page
    alert('Login functionality to be implemented.');
});

function logIn() { 
let email = document.getElementById ("email").value.trim()
let password = document.getElementById ("password").value.trim()

fetch ("http://localhost:3000/login" ,{
headers:{"Content-Type": "application/json"}, 
body:JSON.stringify({"email":email,"password":password}),
method:"POST"
})
.then(response => {
    // if(response.status === 401) {
    //     throw new Error("Incorrect email or password.")
    // } else {
    //     throw new Error("Wrong credentials.")
    // }

    return response.json()
})
.then(json => {
    document.cookie=json
    console.log(json)
    window.location.assign(
        "http://localhost:3000/matches"
    )
}).catch(error => alert(error.message))
} 