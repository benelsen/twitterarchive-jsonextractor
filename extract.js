#!/usr/bin/env node

var fs = require('fs');

var baseFolder = 'tweets/data/js/tweets/';

var files = fs.readdirSync(baseFolder);

var tweets = [];

for (var i = 0; i < files.length; i++) {
  var cnt = fs.readFileSync(baseFolder+files[i], 'utf8');
  cnt = cnt.substr( cnt.indexOf('\n') );
  tweets = tweets.concat(JSON.parse(cnt));
};

fs.writeFileSync('tweets.json', JSON.stringify(tweets, null, '  '), 'utf8');
