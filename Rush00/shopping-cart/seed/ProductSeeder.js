var Product = require('../models/product');

var mongoose = require('mongoose');
const connectionString = 'mongodb+srv://jem:aBRY1wuriaitLrKf@cluster0-bu7rx.mongodb.net/test?retryWrites=true';

mongoose.connect(connectionString);

var products = [
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/puppy-1502565_1920.jpg?raw=true',
		title: 'Dog Food',
		description: 'Keeps Doggos Fed and Happy',
		price: 10,
		category: 'pets'
	}),
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/animal-3174290_1920.jpg?raw=true',
		title: 'Bird Food',
		description: 'This is delicious, quoth the raven evermore',
		price: 10,
		category: 'pets'
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/cat-1136365_1920.jpg?raw=true',
		title: 'Cat Food',
		description: 'Felines feel fine feeding on this grub.',
		price: 10,
		category: 'pets'
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/cat-1136365_1920.jpg?raw=true',
		title: 'Fish Food Food',
		description: 'We promise your fish will say yum!',
		price: 10,
		category: 'pets'
	})
];
var done = 0;
for (var i=0; i < products.length; i++){
	products[i].save( function( err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}