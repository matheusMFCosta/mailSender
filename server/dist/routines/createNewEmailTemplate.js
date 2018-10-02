"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertTable_1 = require("./../database/insertTable");
const createNewemailTemplate = async (connection, emailTemplate) => {
    const emailTemplateData = { ...emailTemplate, CreationDate: +new Date() };
    return await insertTable_1.default(connection, "EMAILTEMPLATE", emailTemplateData).catch((e) => {
        if (e.code === "ER_DUP_ENTRY")
            return { error: "AccountId já existente" };
    });
};
exports.default = createNewemailTemplate;
//# sourceMappingURL=createNewEmailTemplate.js.map