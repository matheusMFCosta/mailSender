import * as express from 'express'
var mysql = require('mysql')
// import con from './db'

var app = express()





app.get('/',  function(req, res) {
  var con = mysql.createConnection({
    host: 'database',
    port:"3306",
    user: 'root',
    password: 'root',
    database:"mybooks",
    // insecureAuth : true
  })

  
  console.log(`con`)

  con.connect(function(err) {
    if (err) throw err
    console.log(`2`)
    
    // con.query("CREATE TABLE EMPLOYEE (EmployeeId INT PRIMARY KEY AUTO_INCREMENT)", function (err, result) {
    //   console.log(`3`)
    //   if (err) console.log( err);
    //   con.query("SELECT * FROM EMPLOYEE", function (err, result) {
    //     console.log(`3`)
    //     if (err) console.log( err);
    //     console.log(result);
    //       })
    //     })

      con.query("SELECT * FROM EMPLOYEE", function (err, result) {
    console.log(`3`)
    if (err) console.log( err);
    console.log(result);
      })
  })



    
  // });
  console.log(`con2`)


})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
