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

// const AccountData: AccountData = {
// 	AccountId: "gc_xoi8837",
// 	host: "gocommerce.com",
// 	Name: "gocomerce",
// 	CreationDate: "1/1/1",
// 	Enviroment: "gocommerce",
// 	Contract: "gocommerce",
// 	status: "active"
// }

const createAccount = async (connection, accountData: AccountData) => {
	return await InsertTable(connection, "ACCOUNT", accountData).catch((e) => {
		if (e.code === "ER_DUP_ENTRY")
			return { error: "AccountId já existente" }
	})
}

export default createAccount