// const express = require('express');
import express from 'express';
const server = express();

// const PORT = process.ENV.PORT || 3000;
const PORT = 3000;

server.listen = server.listen.bind(server, PORT, () => {
    console.log('App listening on port :' + PORT);
});

export { server };