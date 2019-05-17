var Product = require('../models/product');

var mongoose = require('mongoose');
const connectionString = 'mongodb+srv://jem:aBRY1wuriaitLrKf@cluster0-bu7rx.mongodb.net/Shop?retryWrites=true';

mongoose.connect(connectionString, { useNewUrlParser: false });

//Delete things currently in Shop.products. This seeder always clears the DB to start fresh.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  db.collection("products").deleteMany({}, function(){

var products = [
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/puppy-1502565_1920.jpg?raw=true',
		title: 'Dog Food',
		description: 'Keeps Doggos Fed and Happy',
		price: 10,
		categoryTags: ['pets']
	}),
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/animal-3174290_1920.jpg?raw=true',
		title: 'Bird Food',
		description: 'This is delicious, quoth the raven evermore',
		price: 5,
		categoryTags: ['pets']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/cat-1136365_1920.jpg?raw=true',
		title: 'Cat Food',
		description: 'Felines feel fine feeding on this grub.',
		price: 13,
		categoryTags: ['pets']
	}), 
	new Product({
		imagepath: 'https://raw.githubusercontent.com/Jemmeh/42WebDevPiscine/master/Rush00/Images/fish.jpg',
		title: 'Fish Food',
		description: 'We promise your fish will say yum!',
		price: 4,
		categoryTags: ['pets']
	}), 
	new Product({
		imagepath: 'https://raw.githubusercontent.com/Jemmeh/42WebDevPiscine/master/Rush00/Images/business-suit-690048_1920.jpg',
		title: 'Fancy Suit',
		description: 'You will look dashing in this.',
		price: 50,
		categoryTags: ['clothing']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/girl-1333640_1920.jpg?raw=true',
		title: 'Fancy Dress',
		description: 'Ready for a night out with your pinky out.',
		price: 75,
		categoryTags: ['clothing']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/jeans-4050815_1920.jpg?raw=true',
		title: 'Jeans',
		description: 'Comfortable and durable.',
		price: 30,
		categoryTags: ['clothing']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/couch-2590993_1920.jpg?raw=true',
		title: 'Moar Jeans',
		description: 'Also comfortable and durable, but now with 100% more dog.',
		price: 40,
		categoryTags: ['clothing']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/dog_supreme_480x.jpg?raw=true',
		title: 'Dog Hoodie',
		description: 'Your dog will be styling in this ultra soft hoodie.',
		price: 30,
		categoryTags: ['clothing', 'pets']
	}), 
	new Product({
		imagepath: 'https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Images/catsuit.jpg?raw=true',
		title: 'Cat Suit',
		description: 'For the discerning cat.',
		price: 40,
		categoryTags: ['clothing', 'pets']
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
  })
});
