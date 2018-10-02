import * as express from 'express'
import dbConnection from './database/connect';
import query from './database/makeQuery';
import * as bodyParser from 'body-parser';
import createAccount from './routines/createAccount';
import createNewemailTemplate from './routines/createNewEmailTemplate';
import sendEmail from './routines/sendEmai';

var app = express()

app.use(bodyParser.json())

app.get('/', async function (req, res) {
  console.log(`22`)
  const connection = dbConnection()
  console.log(`33`)
  const EmailTemplate = await query(connection, "SELECT * FROM EMAILTEMPLATE")
  const ACCOUNT = await query(connection, "SELECT * FROM ACCOUNT")
  const LOG = await query(connection, "SELECT * FROM LOG")
  console.log(`ACCOUNT`, ACCOUNT)
  console.log(`EmailTemplate`, EmailTemplate)
  console.log(`LOG`, LOG)
  connection.end()
  res.send('Hello World!');
})


app.post('/sendEmail', async function (req, res) {
  const connection = dbConnection()
  const { error } = await sendEmail(connection, req.body)
  res.send(error ? error : "Success");
})

app.post('/createEmailTemplate', async function (req, res) {
  const connection = dbConnection()
  console.log(`2`)
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
