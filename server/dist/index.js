"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const connect_1 = require("./database/connect");
const makeQuery_1 = require("./database/makeQuery");
const bodyParser = require("body-parser");
const createAccount_1 = require("./routines/createAccount");
const createNewEmailTemplate_1 = require("./routines/createNewEmailTemplate");
const sendEmai_1 = require("./routines/sendEmai");
var app = express();
app.use(bodyParser.json());
app.get('/', async function (req, res) {
    console.log(`22`);
    const connection = connect_1.default();
    console.log(`33`);
    const EmailTemplate = await makeQuery_1.default(connection, "SELECT * FROM EMAILTEMPLATE");
    const ACCOUNT = await makeQuery_1.default(connection, "SELECT * FROM ACCOUNT");
    const LOG = await makeQuery_1.default(connection, "SELECT * FROM LOG");
    console.log(`ACCOUNT`, ACCOUNT);
    console.log(`EmailTemplate`, EmailTemplate);
    console.log(`LOG`, LOG);
    connection.end();
    res.send('Hello World!');
});
app.post('/sendEmail', async function (req, res) {
    const connection = connect_1.default();
    const { error } = await sendEmai_1.default(connection, req.body);
    res.send(error ? error : "Success");
});
app.post('/createEmailTemplate', async function (req, res) {
    const connection = connect_1.default();
    console.log(`2`);
    const { error } = await createNewEmailTemplate_1.default(connection, req.body);
    res.send(error ? error : "Success");
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