var mysql = require('promise-mysql')

var createConnection = () => mysql.createPool({
	host: 'database',
	port: "3306",
	user: 'mybooks',
	password: 'root',
	database: "mybooks",
	// insecureAuth : true
})

export default createConnection