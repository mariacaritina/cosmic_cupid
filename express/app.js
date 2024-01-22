const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const queries = require('./queries')
const app = express()
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/front_page/index.html'))
})

app.get("/users", queries.getUsers)

app.get("/login", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/login_page/lp.html'))
})

app.get("/signup", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/sign_up/su.html'))
})

app.get("/birthchart", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/birth_chart/bc.html'))
})

app.get("/chats", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/chat_app/chat.html'))
})

app.get("/matches", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/matches/matches.html'))
})

app.post("/login", queries.loginUsers)

app.post("/register", queries.registerUser)

// app.put("/signup", queries.signupUser)

app.listen(3000)
console.log("Express is running")