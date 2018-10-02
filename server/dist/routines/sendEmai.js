"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertTable_1 = require("./../database/insertTable");
const sendEmail = async (connection, accountData) => {
    const LOGData = { ...accountData, EmailsCount: accountData.Emails.length, CreationDate: `${+new Date()}`, Emails: accountData.Emails.join(",") };
    return await insertTable_1.default(connection, "LOG", LOGData).catch((e) => {
        if (e.code === "ER_DUP_ENTRY")
            return { error: "AccountId já existente" };
    });
};
exports.default = sendEmail;
//# sourceMappingURL=sendEmai.js.map