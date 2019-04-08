<<<<<<< HEAD
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let get = (req, res) => {
	if (req.query.user == null) {
		let resultArray = [];

		mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
			assert.equal(null, err);
			let db = client.db('lab5');
			let cursor = db.collection('message').find();
			cursor.forEach((doc, err) => {
				assert.equal(null, err);
				resultArray.push(doc);
			}, () => {
				res.json({
					"status": "success",
					"message": Object.values(resultArray)
				});
				client.close();
			});
		});
	} else {
		let user = req.query.user;
		res.json({
			"status": "success",
			"message": `GETTING message for username ${user}`
		});
	}
}

let getId = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `GETTING message with ID ${id}`	
	});
}

let post = (req, res) => {
	let d = new Date();
	let hour = d.getHours();
	let minutes = d.getMinutes();

	if (hour < 10) {
		hour = "0" + hour;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	timestamp = hour + ":" + minutes;

	let message = {
		user: req.body.user,
		text: req.body.text,
		timestamp: timestamp
	}

	mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
		assert.equal(null, err);
		let db = client.db('lab5');
		db.collection('message').insertOne(message, (err, result) => {
			assert.equal(null, err);

			res.json({
				"status": "success",
				"message": `POSTING the following message for user ${message["user"]}: ${message["text"]}`
			});

			client.close();
		});
	});

	/*res.json({
		"status": "success",
		"message": `POSTING the following message for user ${user}: ${text}`
	});*/
}

let put_id = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `UPDATING a message with ID ${id}`
	});
}

let delete_id = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `DELETING a message with ID ${id}`
	});
}

module.exports.get = get;
module.exports.getId = getId;
module.exports.post = post;
module.exports.put_id = put_id;
=======
const assert = require('assert');
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let get = (req, res) => {
	if (req.query.user == null) {
		let resultArray = [];

		mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
			assert.equal(null, err);
			let db = client.db('lab5');
			let cursor = db.collection('message').find();
			cursor.forEach((doc, err) => {
				assert.equal(null, err);
				resultArray.push(doc);
			}, () => {
				res.json({
					"status": "success",
					"message": Object.values(resultArray)
				});
				client.close();
			});
		});
	} else {
		let user = req.query.user;
		res.json({
			"status": "success",
			"message": `GETTING message for username ${user}`
		});
	}
}

let getId = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `GETTING message with ID ${id}`	
	});
}

let post = (req, res) => {
	let d = new Date();
	let hour = d.getHours();
	let minutes = d.getMinutes();

	if (hour < 10) {
		hour = "0" + hour;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	timestamp = hour + ":" + minutes;

	let message = {
		user: req.body.user,
		text: req.body.text,
		timestamp: timestamp
	}

	mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
		assert.equal(null, err);
		let db = client.db('lab5');
		db.collection('message').insertOne(message, (err, result) => {
			assert.equal(null, err);

			res.json({
				"status": "success",
				"message": `POSTING the following message for user ${message["user"]}: ${message["text"]}`
			});

			client.close();
		});
	});

	/*res.json({
		"status": "success",
		"message": `POSTING the following message for user ${user}: ${text}`
	});*/
}

let put_id = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `UPDATING a message with ID ${id}`
	});
}

let delete_id = (req, res) => {
	let id = req.params.id;
	res.json({
		"status": "success",
		"message": `DELETING a message with ID ${id}`
	});
}

module.exports.get = get;
module.exports.getId = getId;
module.exports.post = post;
module.exports.put_id = put_id;
>>>>>>> 3c0c1363148a4bc1daa3f210ab0516faf923c194
module.exports.delete_id = delete_id;