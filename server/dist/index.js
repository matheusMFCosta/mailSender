"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const connect_1 = require("./database/connect");
const makeQuery_1 = require("./database/makeQuery");
const bodyParser = require("body-parser");
const createAccount_1 = require("./routines/createAccount");
var app = express();
app.use(bodyParser.json());
app.get('/', async function (req, res) {
    const connection = connect_1.default();
    const rows = await makeQuery_1.default(connection, "SELECT * FROM ACCOUNT");
    console.log(`rows`, rows);
    connection.end();
    res.send('Hello World!');
});
app.post('/sendEmail', async function (req, res) {
    console.log(`req`, req.body);
    res.send('Oi');
});
app.post('/createAccount', async function (req, res) {
    const connection = connect_1.default();
    const { error } = await createAccount_1.default(connection, req.body);
    res.send(error ? error : "Success");
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map