import InsertTable from './../database/insertTable';

interface AccountData {
	LogId?:number
	EmailsCount?:number
	CreationDate?: string
	Emails: string[]
	AccountId:string
	EmailTemplate: string
}


const sendEmail = async (connection, accountData: AccountData) => {
	const LOGData = {...accountData,EmailsCount:accountData.Emails.length, CreationDate: `${+new Date()}`,Emails:accountData.Emails.join(",")}
	return await InsertTable(connection, "LOG", LOGData).catch((e) => {
		if (e.code === "ER_DUP_ENTRY")
			return { error: "AccountId já existente" }
	})
}

export default sendEmail