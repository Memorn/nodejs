var http = require('http');
var url = require('url');


function start(route,handle){
  var onRequest = function(request,response){
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received');

    request.setEncoding('utf-8');

    request.addListener('data',function(postDataChunk){
      postData += postDataChunk;
      console.log("Recived POSTdata chunk'" + postData + "'.'");
    })

    request.addListener('end',function(){
      route(handle,pathname,response,postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server is started.');
}

exports.start = start;
