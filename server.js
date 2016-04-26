var express = require( 'express' );
var app = express();
var PORT = process.env.PORT || 4000;
var todos = [{
	id: 1,
	description: 'Goto office',
	completed: true
},{
	id: 2,
	description: 'Goto home',
	completed: true,	
},{
	id: 3,
	description: 'Sleep at night',
	completed: false
}];


app.get( '/', function( req, res) {
	console.log( 'Todo Api Server' );
});

app.get( '/todos', function( req, res ){	
	res.json( "todos working fine" );
});

app.get( '/todos/:id', function( req, res) {	
	res.json( req.params.id );
});

app.listen( PORT, function(){
	console.log( 'Todo api server listening at port :' + PORT );
});

