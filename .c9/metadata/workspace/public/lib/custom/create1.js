{"filter":false,"title":"create1.js","tooltip":"/public/lib/custom/create1.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":45,"column":9},"action":"insert","lines":["<script>","var http = require('http');","var express = require('express');","var app = express();","var bodyParser = require('body-parser');","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({expected:true}));","","var mongo = require(\"mongodb\");"," //for local","//var db,uri = \"mongod://localhost:27071\";"," //for c9","var db,uri = \"mongodb://\"+process.env.IP+\":27017\";"," mongo.MongoClient.connect(uri,{userNewUrlParser:true},function (err,clint )","{if(err)","{","  console.log(\"Could not connect to mongo db\")","}else {","  db=clint.db(\"drag_drop_dungeon\");","}"," })"," var save = function(form_data)","{","  db.createCollection(\"users\",function (err,collection){","    ","  });","  var collection = db.collection('users');","  collection.save(form_data);","}","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({extended:true}));"," var server = http.Server(app);"," app.get('/', function(req,res){","@@ -21,6 +51,8 @@ app.get('/form', function(req,res){","});","app.post('/submit_user', function(req,res){"," console.log(req.body);"," save(req.body);"," res.status(200);","  ","});","  server.listen(process.env.PORT, process.env.IP, function(){","    console.log('Server running');","  });","","</script>"],"id":1}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":45,"column":9},"end":{"row":45,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":18,"state":["start","no_regex","start","jsx","jsx",1],"mode":"ace/mode/javascript"}},"timestamp":1535822773772,"hash":"e0bdb4e3edb3fc51c415e5f78f2ade9744d2b20f"}