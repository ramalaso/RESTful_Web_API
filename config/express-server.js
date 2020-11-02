const express = require('express');
const server = express();

// const PORT = process.ENV.PORT || 3000;
const PORT = 3000;

server.listen(PORT, () => {
    console.log('App listening on port :' + PORT);
});

module.exports = server;