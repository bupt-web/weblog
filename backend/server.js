var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var posts = [];

fs.readFile(path.join(__dirname, 'post.json'), function (err, data) {
  if (err) {
    return console.log(err);
  }
  posts = JSON.parse(data.toString());
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/getpost/:postid', function (req, res) {
  res.send(posts.find(function (element, index, array) {
    return element['id'] == req.params['postid'];
  }) || {"error": "no such post"});
});

app.get('/getpostlist', function (req, res) {
   res.send(posts);
});

app.get('*', function (req, res) {
  console.log(path.join(__dirname, '../public/index.html'));
  console.log('wtf');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});
