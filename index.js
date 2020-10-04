const express = require('express');
const server = express();
const fs = require('fs');

const projectsPath = __dirname + '/static/banners/';

const files = fs.readdirSync(projectsPath);

function getRandFile() {
  let img = files[Math.floor(Math.random() * files.length)] 
  
  console.log(`img ${img}`);
  
  return img;
}

server.get('/', (req, res) => { res.send("Hello World!")})

server.get('/banner', function (req, res, next) {
  const now = new Date()
  const nowGMTString = now.toGMTString()
  
  let expires = nowGMTString //new Date(now.getTime() + 2592000 * 1000).toGMTString()

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
  res.setHeader('Date', nowGMTString)
  res.setHeader('Cache-Control', 'max-age=2592000');
  res.setHeader('Expires', expires);
  res.setHeader('Pragma', 'no-cache');

  res.sendFile(projectsPath+getRandFile());
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});