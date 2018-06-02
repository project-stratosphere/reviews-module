const express = require('express');
const path = require('path');

const app = express();

console.log(path.join(__dirname, '../public'));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(3004, () => console.log('Example app listening on port 3004!'));
