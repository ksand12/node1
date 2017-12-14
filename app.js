http = require('http');
fs = require('fs');
var server = http.createServer(function(req,res){
	getData(res);
}).listen(3000);
function getData(res){
	fs.readFile('data.json', function(err, data){
		if(err){
			myError(err, res);
		}else{
			getTemp(JSON.parse(data.toString()),res)
		}
	});
}

function getTemp(titles, res){
  fs.readFile('temp.html', function(err, data){
    if(err){
      myError(err, res);
    }else{
      formatHtml(titles, data.toString(), res);
    }
  });
}
// функция formatHtml получив данные и шаблон, передает ответ клиенту.
function formatHtml(titles, tmp, res){
 // в файле шаблона находим символы $$, заменяем их на данные из JSON-файла.
 var htmldata = tmp.replace('$$', titles.field);
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end(htmldata);
}
function myError(err, res){
  console.log(err);
  res.end('server error')
}
