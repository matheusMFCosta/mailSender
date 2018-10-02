"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('promise-mysql');
var createConnection = () => mysql.createPool({
    host: 'database',
    port: "3306",
    user: 'mybooks',
    password: 'root',
    database: "mybooks",
});
exports.default = createConnection;
//# sourceMappingURL=connect.js.map