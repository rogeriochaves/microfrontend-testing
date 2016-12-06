const express = require('express');
const fs = require('fs');
const path = require('path');
let app = express();

const jsRender = (file) => {
  const html = fs.readFileSync(path.join(__dirname, file));
  const safeHtml = html.toString().replace(/\n/g, '').replace(/'/g, "\\'");
  return `debugger; document.write('${safeHtml}')`;
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/header.js', (req, res) => {
  setTimeout(() => res.send(jsRender('header.html')), 500);
});

app.get('/content.js', (req, res) => {
  setTimeout(() => res.send(jsRender('content.html')), 3000);
});

app.get('/footer.js', (req, res) => {
  setTimeout(() => res.send(jsRender('footer.html')), 1000);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
