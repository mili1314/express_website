const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname+'/home.html')
})
app.get('/home', (req, res) => {
    //res.send('Home Page!')
    res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
    //res.send('About Page!')
    res.sendFile(__dirname+'/about.html')
})
app.get('/contact', (req, res) => {
    //res.send('Contact Page!')
    res.sendFile(__dirname+'/contact.html')
})

// app.get('/process',(req,res) =>{
//     var no1= req.query.txt1;
//     var no2= req.query.txt2;
//     var c = parseInt(no1) + parseInt(no2);

//     res.send('sum is' + c);

// })
app.get('/process', (req, res) => {
    // Get the values of the subject marks from the query parameters
    var subject1 = req.query.subject1;
    var subject2 = req.query.subject2;
    var subject3 = req.query.subject3;
    var subject4 = req.query.subject4;
    var subject5 = req.query.subject5;


    var s1 = parseInt(subject1);
    var s2 = parseInt(subject2);
    var s3 = parseInt(subject3);
    var s4 = parseInt(subject4);
    var s5 = parseInt(subject5);7
    var sum = s1 + s2 + s3 + s4 + s5;
    
    var percentage = (sum / 500) * 100;
    res.send(`
        <html>
          <head>
            <title>Results</title>
            <style>
              table {
                width: 50%;
                margin: 50px auto;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid black;
                padding: 10px;
                text-align: center;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h1>Results</h1>
            <table>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
              <tr>
                <td>Subject 1</td>
                <td>${s1}</td>
              </tr>
              <tr>
                <td>Subject 2</td>
                <td>${s2}</td>
              </tr>
              <tr>
                <td>Subject 3</td>
                <td>${s3}</td>
              </tr>
              <tr>
                <td>Subject 4</td>
                <td>${s4}</td>
              </tr>
              <tr>
                <td>Subject 5</td>
                <td>${s5}</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>${sum}</td>
              </tr>
              <tr>
                <th>Percentage</th>
                <td>${percentage.toFixed(2)}%</td>
              </tr>
            </table>
          </body>
        </html>
      `);
    });
//     res.send('The sum of the marks is ' + sum + ' and the percentage is ' + percentage.toFixed(2) + '%');
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})