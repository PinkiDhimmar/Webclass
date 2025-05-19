console.log("Application is starting");
 
const express = require('express')
const app = express()
const port = 3000

app.use('/public', express.static('public'));

app.set('view engine','ejs');
app.get('/', function (req, res){
 res.render("home");
 });

 app.get('/auckland', function (req, res){
 res.render("auckland");
 });

 app.get('/beaches', function (req, res){
 res.render("beaches");
 });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 