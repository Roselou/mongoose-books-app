var mongoose = require('mongoose');
var Schema = mongoose.Schema

var BookSchema = new Schema ({
	title: String, 
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author' 
		// reference to author model by id
		//bc book has one author
	}, 
	image: String, 
	releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;