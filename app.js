const app = require('express')();

app.get('/', (req, res) => {
  res.send("Oh hey there!");
});

app.listen(3000);
