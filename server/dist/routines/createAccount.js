"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertTable_1 = require("./../database/insertTable");
// const AccountData: AccountData = {
// 	AccountId: "gc_xoi8837",
// 	host: "gocommerce.com",
// 	Name: "gocomerce",
// 	CreationDate: "1/1/1",
// 	Enviroment: "gocommerce",
// 	Contract: "gocommerce",
// 	status: "active"
// }
const createAccount = async (connection, accountData) => {
    console.log(`1`);
    return await insertTable_1.default(connection, accountData).catch((e) => {
        console.log(`e`, e.code);
        if (e.code === "ER_DUP_ENTRY")
            return { error: "AccountId já existente" };
    });
};
exports.default = createAccount;
//# sourceMappingURL=createAccount.js.map