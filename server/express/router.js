const express = require("express");
const router = express.Router();
require('dotenv').config();
const db = require('../db/db.js')
const authenticateToken = require('./middleware/authenticateToken');

const generateAccessToken = require('../utilities/generateAccessToken');
router.post('/login', (req, res) => {
    //insert bcrpyt gobbletygoop
    const {username, password} = req.body;
    const token = generateAccessToken(username);
    res.json({ message: 'Login successful', token: token });
});

router.get('/dashboard', authenticateToken, (req, res, next)=>{
   const user = req.user;
    console.log(user, db.userData)
    const dbUser = db.users.filter(item => item.username === user)[0];
    console.log(dbUser.id)
    const data = db.userData.filter(item => item.id === dbUser.id)
    res.json({data: data})
})
module.exports = router