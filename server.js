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

app.listen( PORT, function(){
	console.log( 'Todo api server listening at port :' + PORT );
});

