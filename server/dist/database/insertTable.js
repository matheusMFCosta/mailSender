"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeQuery_1 = require("../database/makeQuery");
const stringfyKey = (keys) => {
    const stringKeys = keys.reduce((prev, next) => `${prev}${next},`, "");
    return stringKeys.slice(0, -1);
};
const stringfyValue = (keys) => {
    const stringKeys = keys.reduce((prev, next) => `${prev}"${next}",`, "");
    return stringKeys.slice(0, -1);
};
const insertTable = async (connection, object) => {
    const keys = stringfyKey(Object.keys(object));
    const value = stringfyValue(Object.values(object));
    const query = `INSERT INTO ACCOUNT (${keys})
	VALUES (${value});`;
    return await makeQuery_1.default(connection, query);
};
exports.default = insertTable;
//# sourceMappingURL=insertTable.js.map