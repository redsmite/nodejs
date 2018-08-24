var fs = require('fs');

//delete

//fs.unlink('writeMe.txt');

//make directory
//fs.mkdirSync('stuff');

// delete directory
//fs.rmdirSync('stuff');

// make directory aSync
// fs.mkdir('stuff', function(){
// 	fs.readFile('readMe.txt','utf8',function(err,data){
// 		fs.writeFile('./stuff/writeMe.txt',data);
// 	});
// });

// remove directory aSync
// fs.unlink('./stuff/writeMe.txt', function(){
// 	fs.rmdir('stuff');
// });