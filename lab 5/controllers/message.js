let get = (req, res) => {
	if (req.query.user == null) {
		res.json({
			"status": "success",
			"message": "GET message"
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
	let user = req.body.user;
	let text = req.body.text;
	res.json({
		"status": "success",
		"message": `POSTING the following message for user ${user}: ${text}`
	});
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
module.exports.delete_id = delete_id;