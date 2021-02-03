var routes = [
	{path: "/api/", controller: "api/login_controller"},
	// {path: "/api/danhsachphieuyeucau", controller: "api/cards_requirement_controller"},
];

exports.activate = function(app){
	routes.forEach(route => { 
		app.use(route.path, require("../controllers/" + route.controller));
	});	
};