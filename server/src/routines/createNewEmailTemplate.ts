import InsertTable from './../database/insertTable';


interface emailTemplate {
	templateId?: number
	content: any
	type: string,
	CreationDate?: string
}



const createNewemailTemplate = async (connection, emailTemplate: emailTemplate) => {
	const emailTemplateData = { ...emailTemplate, CreationDate: +new Date() }
	return await InsertTable(connection, "EMAILTEMPLATE", emailTemplateData).catch((e) => {
		if (e.code === "ER_DUP_ENTRY")
			return { error: "AccountId já existente" }
	})
}

export default createNewemailTemplate