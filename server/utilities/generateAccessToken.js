require('dotenv').config;
const db = require('../db/db')
const jwt = require("jsonwebtoken");
function generateAccessToken(username) {
    const user = db.users.filter(item => item.username === username)
    return jwt.sign(user, `${process.env.TOKEN_SECRET}`);
  }

module.exports = generateAccessToken