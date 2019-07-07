'use strict';

module.exports = function(app) {
	// Root routing
	var contact = require('./../controllers/contact.server.controller');
	app.route('/').get(contact.index);
	app.route('/create').get(contact.new);
	app.route('maps/all').get(contact.all);
	app.route('/index').get(contact.index);
	
	app.route('/create1').get(contact.create1);
	app.route('/create2').get(contact.create2);
	app.route('/list').get(contact.list);
	app.route('map/create1').get(contact.create1);
		
};