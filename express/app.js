const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/front_page/index.html'))
})

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
    res.sendFile(path.join(__dirname, '/public/chats/c.html'))
})

app.get("/matches", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/matches/matches.html'))
})


app.listen(3000)
console.log("Express is running")