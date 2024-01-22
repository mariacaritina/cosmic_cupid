const Pool = require('pg').Pool
const tokenManager = require('./token-manager.js')
require("dotenv").config()


const pool = new Pool({ 
    user: 'mortiz41', 
    host: 'localhost', 
    database: 'matches', 
    password: 'password', 
    port: 5432
})

async function getUser (req, res) { 
    const userID = req.params.id
    await pool.query('SELECT * FROM matches WHERE id = $1', [userId], (error, results) => { 
        if(error) { 
         throw error
        }
        res.status(200).json(results.rows)
    })
}

async function getUsers(req, res) {
    await pool.query('SELECT * FROM users', (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

async function loginUsers (req, res) { 
    const  email = req.body.email 
    const password = req.body.password

    await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email,password], (error, results) => { 
        if (error) {
            throw error
        }
        //do logging stuff
        console.log(results.rows[0].id)
        const token = tokenManager.generateAccessToken(results.rows[0].id)
        res.status(200).json(token)    
    })
}

async function registerUser (req, res) { 
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password
    const email = req.body.email
    const sunsign = req.body.sunsign 
    const moonsign = req.body.moonsign
    const risingsign = req.body.risingsign
    const birthdate = req.body.birthdate
    const choice = req.body.choice

    await pool.query('INSERT INTO users (email, password, firstname, lastname, sunsign, moonsign, risingsign, birthdate, choice) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, firstname, lastname, sunsign, moonsign, risingsign, birthdate, choice], (error, result) => { 
        if (error) {
        throw error
    }
    res.status(200).send("User Added")
    })    
}









module.exports = { 
    getUsers, 
    getUser,
    loginUsers, 
    registerUser
}