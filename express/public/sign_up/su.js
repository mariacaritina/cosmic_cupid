function registerUser() {
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const birthdate = document.getElementById("birthday").value
    const risingsign = document.getElementById("risingsign").value
    const sunsign = document.getElementById("sunsign").value
    const moonsign = document.getElementById("moonsign").value
    const choice = document.getElementById("choice").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    const body = {
        "firstname": firstname,
        "lastname": lastname,
        "birthday": birthdate,
        "risingsign": risingsign,
        "sunsign": sunsign,
        "moonsign": moonsign,
        "choice": choice,
        "email": email,
        "password": password
    }

    fetch("http://localhost:3000/register", {
        headers:{"Content-Type": "application/json"}, 
        body:JSON.stringify(body),
        method:"POST"
    })
    .then( response => {
        if(response.status === 200) {
            alert("Sign up successful!")
            window.location.href = "/"
        } else {
            alert("Something went wrong")
        }
     })

}


console.log("hello!")