const makeQuery = async (connection, query: string) => {
	return await connection.query(query)
}

export default makeQuery