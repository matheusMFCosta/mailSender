import * as express from 'express'
import dbConnection from './database/connect';
import query from './database/makeQuery';
import * as bodyParser from 'body-parser';
import createAccount from './routines/createAccount';
import createNewemailTemplate from './routines/createNewEmailTemplate';

var app = express()

app.use(bodyParser.json())

app.get('/', async function (req, res) {
  const connection = dbConnection()
  const rows = await query(connection, "SELECT * FROM ACCOUNT")
  console.log(`rows`, rows)
  connection.end()
  res.send('Hello World!');
})


app.post('/sendEmail', async function (req, res) {
  const connection = dbConnection()
  const { error } = await createNewemailTemplate(connection, req.body)
  res.send(error ? error : "Success");
})

app.post('/createAccount', async function (req, res) {
  const connection = dbConnection()
  const { error } = await createAccount(connection, req.body)
  res.send(error ? error : "Success");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
