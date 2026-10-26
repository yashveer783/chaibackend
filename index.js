console.log("Chai aur code");
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    req.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai aur code")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
