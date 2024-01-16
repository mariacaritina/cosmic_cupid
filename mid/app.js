const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

app.get("/login", (req, res) => { 
    res.send("login")
})

app.get("/signup", (req, res) => { 
    res.send("signup")
})

app.get("/birthchart", (req, res) => { 
    res.send("birthchart")
})

app.get("/chats", (req, res) => { 
    res.send("chats")
})

app.get("/matches", (req, res) => { 
    res.send("matches")
})


app.listen(3000)
console.log("Express is running")