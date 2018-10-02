import Query from '../database/makeQuery';
import { databaseTables } from '../types';


const stringfyKey = (keys: string[]) => {
	const stringKeys = keys.reduce((prev, next) => `${prev}${next},`, "")
	return stringKeys.slice(0, -1)
}

const stringfyValue = (keys: string[]) => {
	const stringKeys = keys.reduce((prev, next) => `${prev}"${next}",`, "")
	return stringKeys.slice(0, -1)
}

const insertTable = async (connection, tableName: databaseTables, object: object) => {
	const keys = stringfyKey(Object.keys(object))
	const value = stringfyValue(Object.values(object))

	const query = `INSERT INTO ${tableName} (${keys})
	VALUES (${value});`

	return await Query(connection, query)
}

export default insertTable