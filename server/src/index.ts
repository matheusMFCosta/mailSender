import * as express from 'express'
import dbConnection from './database/connect';
import query from './database/makeQuery';
var app = express()





app.get('/', async function (req, res) {
  const connection = dbConnection()
  console.log(`connection`)
  const rows = await query(connection, "SELECT * FROM EMPLOYEE")
  console.log(`row`)
  connection.end()
  console.log(rows)
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
