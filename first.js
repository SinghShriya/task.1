var fs = require("fs");
 
function printData(err, data) {
      console.log(data);
}
 function myReadFile(callback){
      fs.readFile('s.txt', 'utf8', callback);
 }

 myReadFile(printData);     