"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertTable_1 = require("./../database/insertTable");
const createAccount = async (connection, accountData) => {
    return await insertTable_1.default(connection, "ACCOUNT", accountData).catch((e) => {
        if (e.code === "ER_DUP_ENTRY")
            return { error: "AccountId já existente" };
    });
};
exports.default = createAccount;
//# sourceMappingURL=createAccount.js.map