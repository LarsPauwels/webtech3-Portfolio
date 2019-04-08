let get = (req, res) => {
	res.render('createpoll');
}

let post = (req, res) => {
	let question = req.body.question;
	let answer1 = req.body.answer1;
	let answer2 = req.body.answer2;

	res.json({
		"status": "success",
		"message": `Adding a POLL with question: '${question}' and answers: '${answer1}, ${answer2}'`
	});
}

module.exports.get = get;
module.exports.post = post;