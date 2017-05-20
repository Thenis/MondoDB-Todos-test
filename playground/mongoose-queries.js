const {ObjectId} = require("mongodb");

const {
	mongoose
} = require("./../server/db/mongoose");
const {
	Todo
} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// let id = "59200a1dcd4c0440f474f1fb11";

// if(!ObjectId.isValid(id)){
// 	console.log("Id not valid");
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log("Todos: ", todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log("Todo: ", todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log("Id not found");
// 	}
// 	console.log("Todo by id: ", todo);
// }).catch((e) => console.log(e));

let userId = "591f25792c21eb351c1d0f9c";

User.findById(userId).then((user) => {
	if (!user) {
		return console.log("Id no found");
	}

	console.log(user)
}).catch((e) => console.log(e));