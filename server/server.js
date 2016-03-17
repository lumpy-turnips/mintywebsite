const express = require('express');
const path = require('path');
const compression = require('compression');


const app = express();


app.use(compression());


app.use(express.static('client'));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Express server running on localhost: ${PORT}`);
