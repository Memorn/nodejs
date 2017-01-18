

var exec = require('child_process').exec;


function start(response){
  console.log('Request handler "start" was called');

  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200,{'Content-type':'text/html'});
  response.write(body);
  response.end();


  // function sleep(milliSeconds){
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime + milliSeconds);
  // }
  // sleep(10000);

}

function upload(response){
  console.log('Request hanler "upload" was called');
  response.writeHead(200,{'Content-type':'text/plain'});
  response.write('Hello upload');
  response.end();
}

exports.start = start;
exports.upload = upload;