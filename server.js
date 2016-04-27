var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var __ = require( 'underscore' );
var PORT = process.env.PORT || 4000;
var todos = [];
var todoNextId = 1;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use( bodyParser.json() );

app.get( '/', function( req, res) {
	console.log( 'Todo Api Server' );
});

app.get( '/todos', function( req, res ){	
	res.json( todos );
});

app.get( '/todos/:id', function( req, res) {
	var todoId = parseInt( req.params.id, 10 );
	var matchedTodo = __.findWhere( todos, { id: todoId } );

	if( matchedTodo ){
		res.json( matchedTodo );
	}else{
		res.status(404).send();
	}
});

// POST /todos
app.post( '/todos', function( req, res ){
	var body = __.pick( req.body, 'description', 'completed' );
	if ( ! __.isBoolean( body.completed ) || !__.isString( body.description ) || body.description.trim().length == 0  ){
		return res.status( 400 ).send();
	}

	body.description = body.description.trim();
	body.id = todoNextId;
	todos.push( body );
	todoNextId++;
	res.json( body );
});

app.listen( PORT, function(){
	console.log( 'Todo api server listening at port :' + PORT );
});

