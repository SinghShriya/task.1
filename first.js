function fileread(filename){

    var contents= fs.readFileSync(filename);
    return contents;
}

var fs =require("fs");  

var data= fileread("s.txt");

console.log(data.toString());