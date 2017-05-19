const {
	MongoClient,
	ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server.");
	}
	console.log("Connected to MongoDB server.");

	// db.collection("Todos").deleteMany({text: "Eat launch"}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection("Todos").deleteOne({completed: 'Each launch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection("Users").deleteMany({name: "Denis"}).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndDelete({_id: new ObjectID("591f0147fbaeef2fcc3c2f52")}).then((result) => {
		console.log(result);
	});

	//db.close();
});