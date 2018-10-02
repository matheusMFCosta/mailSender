import InsertTable from './../database/insertTable';

interface AccountData {
	AccountId: string,
	host: string,
	Name: string,
	CreationDate: string,
	Enviroment: string,
	Contract: string,
	status: string
}

const createAccount = async (connection, accountData: AccountData) => {
	return await InsertTable(connection, "ACCOUNT", accountData).catch((e) => {
		if (e.code === "ER_DUP_ENTRY")
			return { error: "AccountId já existente" }
	})
}

export default createAccount