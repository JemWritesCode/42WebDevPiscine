// Titles of Links and text between <a> tags should be changed to Uppercase.

var fs = require('fs')
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/string to be replaced/g, 'replacement');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});