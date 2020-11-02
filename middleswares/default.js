const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const basicAuth = require('express-basic-auth');

module.exports = server => {
    server.use(cors());
    server.use(helmet());
    server.use(
        basicAuth({
            users: {
                admin: "supersecret"
            },
            challenge: true
        })
    );
    server.use(express.json());
};