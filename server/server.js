const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

let port = 3004;

app.listen(3004, () => console.log('App listening on port ', port));
