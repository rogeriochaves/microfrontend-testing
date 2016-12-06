const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/header', (req, res) => {
    setTimeout(() => res.sendFile(__dirname + '/header.html'), 500);
});

app.get('/content', (req, res) => {
    setTimeout(() => res.sendFile(__dirname + '/content.html'), 3000);
});

app.get('/footer', (req, res) => {
    setTimeout(() => res.sendFile(__dirname + '/footer.html'), 1000);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
