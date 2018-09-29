"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeQuery = async (connection, query) => {
    return await connection.query(query);
};
exports.default = makeQuery;
//# sourceMappingURL=makeQuery.js.map