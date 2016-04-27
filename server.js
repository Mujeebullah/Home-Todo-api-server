var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
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
	var matchedTodo;
	todos.forEach( function( todo )	{
		if( parseInt( req.params.id ) === todo.id ){
			matchedTodo = todo;
			return;
		}
	});
	if( matchedTodo ){
		res.json( matchedTodo );
	}else{
		res.status(404).send();
	}
});

// POST /todos
app.post( '/todos', function( req, res ){
	var body = req.body;
	console.log( 'description :' + body.description );
	res.json( body );
});

app.listen( PORT, function(){
	console.log( 'Todo api server listening at port :' + PORT );
});

