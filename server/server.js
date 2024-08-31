const express = require('express');

require('dotenv').config();
const server = express();
const router = require('./express/router.js');

const PORT = process.env.SERVER_PORT || 4000

server.use(express.json());

server.use('/api', router)

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}...`)
})