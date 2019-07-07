'use strict';

exports.index = function(req, res) {
	res.render('./../public/views/map/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.new = function(req, res) {
	res.render('./../public/views/map/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.view = function(req, res) {
	res.render('./../public/views/map/view.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.create1 = function(req, res) {
	res.render('./../public/views/map/create1.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.create2 = function(req, res) {
	res.render('./../public/views/map/create2.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.list = function(req, res) {
	res.render('./../public/views/map/list.ejs', {
		user: req.user || null,
		request: req
	});
};

app.post('/create1', function(req,res){
 console.log(req.body);
 save(req.body);
 res.status(200);
 var new_contact = new Contact(req.body);
 new_contact.save(function(err, data){
   if(err){
     return res.status(400).json({message: "Could not save contact"})
   }
   res.status(200).json(data);
 })
 //save(req.body);
 //res.status(200);
  
});
exports.all = function(req, res) {
  Map.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log(data);

      res.render('./../public/views/map/list.ejs', {
    		user: req.user || null,
    		request: req,
                maps: data
    	});
    }
  });

};
