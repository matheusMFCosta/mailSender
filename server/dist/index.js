"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const connect_1 = require("./database/connect");
const makeQuery_1 = require("./database/makeQuery");
var app = express();
app.get('/', async function (req, res) {
    const connection = connect_1.default();
    console.log(`connection`);
    const rows = await makeQuery_1.default(connection, "SELECT * FROM EMPLOYEE");
    console.log(`row`);
    connection.end();
    console.log(rows);
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map